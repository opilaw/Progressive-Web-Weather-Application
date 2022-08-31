import logo from './logo.svg'
import './App.css'

import Landing from './components/landing/Landing'
import Background from './components/background/Background'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Desktop from './components/desktop/Desktop'
import { fetchWeather } from './components/api/fetchWeather'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FormSuccess from './components/register/FormSuccess'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Landing />} index />
          <Route path="register" element={<Register />} />

          <Route element={<FormSuccess />} index />
          <Route path="landing" element={<Landing />} />

          <Route element={<Landing />} index />
          <Route path="login" element={<Login />} />

          <Route element={<Register />} index />
          <Route path="landing" element={<Landing />} />

          <Route element={<Register />} index />
          <Route path="login" element={<Login />} />

          <Route element={<Login />} index />
          <Route path="desktop" element={<Desktop />} />
        </Routes>
      </Router>

      <Background />
    </div>
  )
}

export default App
