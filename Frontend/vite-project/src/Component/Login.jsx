import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const change = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const login = async (event) => {
    event.preventDefault()

    try {
      const res = await axios.post(
        'http://localhost:4001/auth/login',
        formData,
        { withCredentials: true }
      )

      if (res.data.success) {
        alert("Login successful ✅")
        navigate("/dashboard")
      }

    } catch (err) {
      console.log(err)
      alert("Login failed ❌")
    }
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 m-3 rounded-lg shadow-md'>
      
      <form 
        onSubmit={login} 
        className='p-7 bg-white rounded-lg shadow-lg border-y-black px-15'
      >
        
        <h1 className='p-3 px-20 py-5 font-bold'>Login</h1>

        <div className='flex flex-col mb-2'>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="border-2 border-gray-300 rounded-md p-2 mb-4"
            onChange={change}
          />
        </div>

        <div className='flex flex-col mb-2'>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            className="border-2 border-gray-300 rounded-md p-2 mb-4"
            onChange={change}
          />
        </div>

        <button 
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'
        >
          Submit
        </button>

        <p className='mt-4 text-sm text-gray-600'>
          Don't have an account? 
          <Link to="/register" className='text-blue-500 hover:underline'>
            Register here
          </Link>
        </p>

      </form>
    </div>
  )
}

export default Login