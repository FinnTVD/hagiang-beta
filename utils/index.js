import { toast } from 'react-toastify'

const notify = () =>
  toast.success('Successful form submission!', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  })

const notifyError = () =>
  toast.error('An error has occurred, please try again later!', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  })

const exchangeRate = 24500
const sizeBlog = 12

export { exchangeRate, notify, notifyError, sizeBlog }
