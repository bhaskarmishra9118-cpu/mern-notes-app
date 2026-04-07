import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./layout/Nav"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import AddNote from "./pages/AddNote"
import GetNotes from "./pages/GetNotes"
import Dashboard from "./pages/Dashboard"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addnote" element={<AddNote />} />
          <Route path="/getnotes" element={<GetNotes />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App