import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CallbackPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')

    if (token) {
      // TODO: Save this token to a state management system or localStorage for future requests.
      localStorage.setItem('etsyToken', token)
      navigate('/orders') // Redirect to Orders page
    } else {
      // Handle the situation when the token is not present
      console.error('Token not found in callback.')
      navigate('/') // Redirect to HomePage
    }
  }, [navigate])

  return <div>Processing...</div>
}

export default CallbackPage
