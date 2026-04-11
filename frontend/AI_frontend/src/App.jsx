import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserRegister from './pages/UserRegister'
import UserLogin from './pages/UserLogin'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Mainhome from './pages/Mainhome'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Mainhome/>}/>
        <Route path='/user/register' element={<UserRegister/>} />
        <Route path='/user/login' element={<UserLogin/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
