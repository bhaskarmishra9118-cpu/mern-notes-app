import React from 'react'
import Nav from "./Component/Nav"
import Registerform from "./Component/Ragisterform"
import Login from "./Component/Login"
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Addnote from './Component/AddNote'
import Getnote from './Component/Getnote'
import Dashboard from './Component/Dashboard'
import Home from './Component/Home'
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registerform />} />
          <Route path="/login" element={<Login />} />
          <Route path='/addnote' element={<Addnote/>}/>
          <Route path='/getnotes' element={<Getnote/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App