import { useState } from 'react'
import { Link } from 'react-router-dom'
import ErrorText from '../../components/Typography/ErrorText'
import InputText, { type formFuncInput } from '../../components/Input/InputText'
import { useCookies } from 'react-cookie'
import Button from '@components/Buttons'
import banner from '../../assets/default-banner.jpg'
import { ENDPOINTS } from '@constants/endpoints'
import routes, { routesParentPath } from '@routes'

function Login () {
  const [, setCookie] = useCookies(['token'])
  const INITIAL_LOGIN_OBJ = {
    emailId: '',
    password: ''
  }

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ)

  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const errorMsg = []
    if (loginObj.emailId.trim() === '') {
      errorMsg.push('Email Id')
    }
    if (loginObj.password.trim() === '') {
      errorMsg.push('Password')
    }

    if (errorMsg.length) {
      setErrorMessage('Required: ' + errorMsg.join(', '))
    } else {
      setLoading(true)

      // #region remove this block after API is ready
      setCookie('token', 'tokenxxxxx', { path: '/', domain: document.location.hostname, maxAge: 7 * 24 * 60 * 60 })
      setLoading(false)
      window.location.href = routesParentPath + routes.styling.path
      // #endregion

      // Call API to check user credentials and save token in cookie
      // fetch login API and save token in cookie
      try {
        const res = await fetch(ENDPOINTS.LOGIN, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginObj)
        })
        if (res.status !== 200 && !res.ok) throw new Error('Something went wrong')

        const { token } = await res.json()

        if (token) {
          // expired date is 7 days from now
          setCookie('token', token, { path: '/', domain: document.location.hostname, maxAge: 7 * 24 * 60 * 60 })
          setLoading(false)
          window.location.href = '/app/'
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  const updateFormValue = ({ updateType, value }: formFuncInput) => {
    setErrorMessage('')
    setLoginObj({ ...loginObj, [updateType]: value })
  }

  return (
    <div className="min-h-screen flex items-center">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 border rounded-md overflow-hidden">
          <div className='bg-cover bg-center' style={{ backgroundImage: `url(${banner})` }} ></div>
          <div className="py-24 px-10 dark:bg-gray-800">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <form onSubmit={(e) => { void submitForm(e) }}>
              <div className="mb-4">
                <InputText
                  type="text"
                  defaultValue={loginObj.emailId}
                  updateType="emailId"
                  placeholder="Email Id"
                  containerClassName="mt-4"
                  labelTitle="Email Id"
                  updateFormValue={updateFormValue}
                  labelStyle=""
                />
                <InputText
                  defaultValue={loginObj.password}
                  type="password"
                  updateType="password"
                  placeholder="password"
                  containerClassName="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                  labelStyle=""
                />
              </div>
              <div className="text-right text-primary">
                <Link to="/forgot-password">
                  <span className="text-sm inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Forgot Password?
                  </span>
                </Link>
              </div>
              <ErrorText className="mt-8">{errorMessage}</ErrorText>
              <Button type="submit" styling='primary' className='btn mt-2 w-full' isLoading={loading} isThrottled delay={500}>Login</Button>

              <div className="text-center mt-4">
                Don&apos;t have an account yet?{' '}
                <Link to="/register">
                  <span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Register
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login
