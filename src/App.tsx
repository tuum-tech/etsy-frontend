import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import CallbackPage from './pages/Callback'
import HomePage from './pages/Login'
import OrdersPage from './pages/Orders'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/orders' element={<OrdersPage />} />
          <Route path='/callback' element={<CallbackPage />} />{' '}
          {/* New Callback route */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
