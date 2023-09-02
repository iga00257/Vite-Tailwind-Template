import { useState, useEffect } from 'react'
import { useToast } from '@hooks/useToast'
import routes, { routesParentPath } from '@routes'

import Title from '@components/utils/Title'
import Breadcrumbs from '@components/Breadcrumbs'

import { Grid, GridItem } from '@components/Grid'
import InputText, { type formFuncInput } from '@components/Input/InputText'
import DeleteModal from '@components/Modals/DeleteModal'

import ShieldCheckIcon from '@heroicons/react/24/solid/ShieldCheckIcon'
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import FilterMenu from '@components/Filter'
import Table from '@components/Table'
import { type IUser } from '@interface/IUser'
import { type IRenderHandler } from '@interface/IRenderHandler'
import { Link } from 'react-router-dom'

const AdminIcon = () => { return <div className='tooltip tooltip-bottom' data-tip='Super Admin'><ShieldCheckIcon className='w-5 h-5 text-primaryColor inline-block' /></div> }

function UsersPage () {
  const showToast = useToast()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [deleteItemName, setDeleteItemName] = useState('')

  // Data
  const columns = [
    { name: 'Account', key: 'account' },
    { name: 'First Name', key: 'firstName' },
    { name: 'Last Name', key: 'lastName' },
    { name: 'Email', key: 'email' },
    { name: 'Description', key: 'description' },
    { name: 'Group', key: 'group' },
    { name: 'CreatedDate', key: 'createdDate' },
    { name: 'UpdatedDate', key: 'updatedDate' },
    { name: 'Action', key: 'action' }
  ]

  const data: IUser[] = [
    {
      id: '14d34775f2b84c2f9fd1d253e3aa061a',
      account: 'admin',
      super_admin: true,
      firstName: 'Aetina',
      lastName: 'Admin',
      email: 'sales@aetina.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisl ac urna dignissim consectetur. Fusce at tristique velit. Etiam sit amet rhoncus metus, id mattis eros',
      group: ['General', 'Taipei', 'Ilan', 'HsinChu', 'Taichung', 'Tainan', 'Kaohsiung'],
      createdDate: '2023-05-18',
      updatedDate: '2023-05-19'
    },
    {
      id: '8c52e8fb58154907aa5b855792be249a',
      account: 'john_doe',
      super_admin: true,
      firstName: 'John',
      lastName: 'Doe',
      email: 'sales@aetina.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisl ac urna dignissim consectetur. Fusce at tristique velit. Etiam sit amet rhoncus metus, id mattis eros',
      group: ['General', 'Taipei'],
      createdDate: '2023-05-18',
      updatedDate: '2023-05-19'
    },
    {
      id: 'da53e0403bd0442fa1778937ebca099a',
      account: 'jane_doe',
      super_admin: true,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'sales@aetina.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisl ac urna dignissim consectetur. Fusce at tristique velit. Etiam sit amet rhoncus metus, id mattis eros',
      group: ['General', 'Ilan'],
      createdDate: '2023-05-18',
      updatedDate: '2023-05-19'
    },
    {
      id: 'a462c7fb43fe42c691559ee9ce1ae3ed',
      account: 'user_1',
      super_admin: false,
      firstName: 'John',
      lastName: 'Anderson',
      email: 'sales@aetina.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisl ac urna dignissim consectetur. Fusce at tristique velit. Etiam sit amet rhoncus metus, id mattis eros',
      group: ['General'],
      createdDate: '2023-05-18',
      updatedDate: '2023-05-19'
    },
    {
      id: '8d14ad300c7b470aa6866717517e3618',
      account: 'user_2',
      super_admin: false,
      firstName: 'Kevin',
      lastName: 'Anderson',
      email: 'sales@aetina.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisl ac urna dignissim consectetur. Fusce at tristique velit. Etiam sit amet rhoncus metus, id mattis eros',
      group: [],
      createdDate: '2023-05-18',
      updatedDate: '2023-05-19'
    }
  ]

  const renderHandler = (key: string, value: IRenderHandler, item: IUser) => {
    if (key === 'account') {
      return (
        <div className="whitespace-nowrap leading-4">
          {value} {item.super_admin && <AdminIcon />}
        </div>
      )
    }

    if (key === 'group') {
      if (typeof value === 'string') {
        return <div className="whitespace-nowrap">{value}</div>
      }

      if (Array.isArray(value)) {
        if (value.length === 0) {
          return <small className="light">No Group</small>
        } else {
          return (
            <>
              <div className="whitespace-nowrap">
                {value.slice(0, 3).map((group: string, index: number) => (
                  <div key={index} className="badge badge-sm">
                    {group}
                  </div>
                ))}
                {value.length > 3 && <sub className="light whitespace-nowrap">{value.length - 3} more</sub>}
              </div>
            </>
          )
        }
      }
    }

    if (key === 'description') {
      return <div className="max-w-[200px] truncate">{value}</div>
    }

    if (key === 'action') {
      return (
        <div className="flex gap-2">
          <Link to={routesParentPath + routes.usersEdit.path.replace(':user_id', item.id)} className="btn btn-primary">
            Edit
          </Link>
          <button type="button" className="btn-danger" onClick={() => { setIsDeleteModalOpen(true); setDeleteItemName(item.account) }}>Delete</button>
        </div>
      )
    }

    return <span>{value}</span>
  }

  // Filter
  const [displayFilters, setDisplayFilters] = useState<string[]>([])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [inputKeyword, setInputKeyword] = useState('')

  // Called when the user changes the selected filters
  const handleFilterChange = (filters: string[]) => {
    setSelectedFilters(filters)
  }

  // Called when the user changes the keyword input
  const updatesetInputKeywordValue = ({ updateType, value }: formFuncInput) => {
    setInputKeyword(value)
  }

  // Updates the display filters based on the selected filters and keyword input
  const updateDisplayFilters = (filters: string[]) => {
    if (inputKeyword !== '') {
      setDisplayFilters([...selectedFilters, inputKeyword])
    } else {
      setDisplayFilters([...selectedFilters])
    }
  }

  // Update the display filters whenever the selected filters or keyword input changes
  useEffect(() => {
    updateDisplayFilters(selectedFilters)
  }, [selectedFilters, inputKeyword])

  return (
    <>
    <Breadcrumbs />

    <DeleteModal title='Delete'
      open={isDeleteModalOpen}
      onClose={() => { setIsDeleteModalOpen(!isDeleteModalOpen) }}
      onSave={() => { showToast('Delete complete', { type: 'success' }) }}>
        <p>Are you sure you want to <span className='danger font-bold'>delete &quot;{deleteItemName}&quot;</span>?</p>
        <p>You can&rsquo;t undo this action.</p>
    </DeleteModal>

    <Title title="Users"/>
    <h1>Users</h1>

    <Grid>
      <GridItem cols={12} withBg>
        <div className='flex flex-row flex-wrap justify-between gap-3'>
          <div className='flex gap-3'>
            <FilterMenu
              options={[
                { label: 'Filter 1', value: 'filter1' },
                { label: 'Filter 2', value: 'filter2' },
                { label: 'Filter 3', value: 'filter3' }
              ]}
              onChange={handleFilterChange}
              initialValue={selectedFilters}
            />
            <div className="input-group">
              <InputText type="text" defaultValue={inputKeyword} updateType="" containerClassName="m-0" InputClassName="leading-5" labelTitle="" updateFormValue={ updatesetInputKeywordValue } labelStyle={''} placeholder='Keyword Search'/>
              <button type='button' className='btn-primary'><MagnifyingGlassIcon className='w-4 h-4'/></button>
            </div>
          </div>

          <div>
            <Link to={routesParentPath + routes.usersCreate.path} className="btn btn-primary leading-5">
              Create User
            </Link>
          </div>
        </div>
      </GridItem>
    </Grid>

    <Grid>
      <GridItem cols={12} withBg>
        <div className='overflow-x-auto overflow-y-hidden'>
          <Table column={columns} data={data} renderHandler={renderHandler} />
        </div>
        <div className='flex flex-col sm:flex-row mt-3'>
          <div className='sm:w-1/2'>
            {displayFilters.length !== 0 && (
              <div>
                Result for {displayFilters.map((filter, index) => (
                  <>
                    {index > 0 && ', '}
                    <strong>{filter}</strong>
                  </>
              ))}.
              </div>
            )}
          </div>
          <div className='sm:w-1/2'>
            <div className=' sm:text-right'>
              Showing <strong>1</strong> to <strong>10</strong> of <strong>5</strong> entries.
            </div>
          </div>
        </div>

      </GridItem>
    </Grid>

    <Grid>
      <GridItem cols={12} withBg>
      <div className='flex flex-row flex-wrap'>
        <div className="btn-group pagination lg:w-2/3">
          <button className="btn btn-sm">«</button>
          <button className="btn btn-sm">‹</button>
          <button className="btn btn-sm btn-active">1</button>
          <button className="btn btn-sm">2</button>
          <button className="btn btn-sm">3</button>
          <button className="btn btn-sm">4</button>
          <button className="btn btn-sm">5</button>
          <button className="btn btn-sm">›</button>
          <button className="btn btn-sm">»</button>
        </div>
        <div className='border-l border-gray-400 mx-4 '>
        </div>
        <div>
          <select className="w-16">
            <option disabled selected>10</option>
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>&nbsp;entries per page
        </div>
      </div>
      </GridItem>
    </Grid>
    </>
  )
}

export default UsersPage
