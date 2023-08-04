const HomePage = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3001/auth/etsy'
  }

  return (
    <div>
      <button onClick={handleLogin}>Login with Etsy</button>
    </div>
  )
}

export default HomePage
