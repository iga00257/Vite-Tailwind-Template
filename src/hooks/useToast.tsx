import React from 'react'
import ReactDOM from 'react-dom/client'
import { toast, ToastContainer, type ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type ToastType = 'default' | 'success' | 'error' | 'warning' | 'info'

type ToastOptionsExtended = ToastOptions & {
  type?: ToastType
}

let isToastContainerAdded = false

const addToastContainer = () => {
  if (!isToastContainerAdded) {
    const container = document.createElement('div')
    container.id = 'toast-container-wrapper'
    document.body.appendChild(container)

    const containerElement = document.getElementById('toast-container-wrapper')

    if (containerElement) {
      const root = ReactDOM.createRoot(containerElement)
      root.render(<ToastContainer />)
      isToastContainerAdded = true
    }
  }
}
const getToastColorClassName = (type: ToastType): string => {
  switch (type) {
    case 'default':
      return 'bg-primaryColor'
    case 'success':
      return 'bg-green-500'
    case 'error':
      return 'bg-red-500'
    case 'warning':
      return 'bg-yellow-500'
    case 'info':
      return 'bg-blue-500'
    default:
      return 'bg-primaryColor'
  }
}

export const useToast = () => {
  if (!isToastContainerAdded) {
    addToastContainer()
  }
  const showToast = (
    message: string,
    options: ToastOptionsExtended = {}
  ) => {
    const {
      type = 'default',
      position = 'bottom-right',
      className = '',
      ...restOptions
    } = options

    const colorClassName = getToastColorClassName(type)

    const toastOptions: ToastOptions = {
      position,
      className: `${colorClassName} shadow-md rounded-md px-4 py-2 ${className}`,
      autoClose: 3000,
      closeOnClick: true,
      draggable: true,
      ...restOptions,
      render: ({ closeToast }) => (
        <div className={`${colorClassName} p-4 rounded-md`}>
          {message}
          <button onClick={closeToast}>×</button>
        </div>
      )
    }

    switch (type) {
      case 'default':
        toast(message, toastOptions)
        break
      case 'success':
        toast.success(message, toastOptions)
        break
      case 'error':
        toast.error(message, toastOptions)
        break
      case 'warning':
        toast.warn(message, toastOptions)
        break
      case 'info':
        toast.info(message, toastOptions)
        break
      default:
        break
    }
  }
  
  return showToast
}
