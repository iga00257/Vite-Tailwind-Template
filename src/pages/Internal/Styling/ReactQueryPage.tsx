import { type Key, lazy, Suspense } from 'react'
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'
import Skeleton from '@components/utils/Skeleton'
import Unauthorized from '@components/utils/Unauthorized'
import DataNotFound from '@components/utils/DataNotFound'

import Breadcrumbs from '@components/Breadcrumbs'

const queryClient = new QueryClient()

// Default delay time
const DEFAULT_DELAY_MS = 2000

// Delay function
const delay = async (ms: number): Promise<void> => { await new Promise((resolve) => setTimeout(resolve, ms)) }

// Assume we have a function to fetch users from API
async function fetchUsers (apiUrl: string) {
  if (apiUrl) {
    const res = await fetch(apiUrl)
    if (!res.ok) {
      throw new Error('Network response was not ok')
    }
    return await res.json()
  } else {
    await delay(DEFAULT_DELAY_MS)
    return [{ id: 1, name: 'John' }, { id: 2, name: 'Amy' }, { id: 3, name: 'Ben' }] // Mock data
  }
}

function Users () {
  const apiUrl = '' // Replace with your API URL or set to null
  const { data, status, error } = useQuery(['users', apiUrl], async () => await fetchUsers(apiUrl))

  if (status === 'loading') {
    return <Skeleton active/>
  }
  if (status === 'error') {
    if (error instanceof Error) {
      switch (error.message) {
        case 'Unauthorized':
          // Handle 401 unauthorized case
          return <Unauthorized />
        case 'Forbidden':
          // Handle 403 forbidden errors, when the user doesn't have the necessary permissions
          break
        case 'NotFound':
          // Handle 404 resource not found errors
          break
        case 'Timeout':
          // Handle 408 timeout errors
          break
        case 'Conflict':
          // Handle 409 conflict errors, when a request conflict with current state of the server
          break
        case 'TooManyRequests':
          // Handle 429 too many requests error, when user sent too many requests in a given amount of time
          break
        case 'Server Error':
          // Handle 500 server errors
          break
        // Add more cases as needed
        default:
          return <span>Error fetching data: {error.message}</span>
      }
      return <span>Error fetching data: {error.message}</span>
    }
  }

  // Render users using data
  return (
    <ul>
      {data.length
        ? (
            // data is exist
            data.map((user: { id: Key | null | undefined, name: string }) => (
              <li key={String(user.id)}>{user.name}</li>
            ))
          )
        : (
            // data not found
            <DataNotFound />
          )}
    </ul>

  )
}

const UsersPage = lazy(async () => await Promise.resolve({ default: Users }))

function ReactQueryPage () {
  return (
    <>
      <Breadcrumbs/>
      <h1>react-query example</h1>

      <div className="w-1/4">
        <Suspense fallback={<Skeleton />}>
          <QueryClientProvider client={queryClient}>
            <UsersPage />
          </QueryClientProvider>
        </Suspense>
      </div>
    </>
  )
}

export default ReactQueryPage
