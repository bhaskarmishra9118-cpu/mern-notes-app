import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Registerform = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  // Handle input change
  const change = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  // Handle submit
  const submitform = async (event) => {
    event.preventDefault();   
   
    try {
      const data=await axios.post('http://localhost:4001/auth/register', formData);
      window.alert("User Registered Successfully");
    } catch (err) {
      console.log(err.response?.data || err.message);
      if(err.response?.status === 409){
        alert("Email Already Exist ")
      }
      else if(err.response?.status === 400&&err.response?.data?.message === "All fields are required"){
        alert("All fields are required")
      }
      else if(err.response?.status === 400&&err.response?.data?.message === "Invalid email format"){
        alert("Invalid email format")
      }
      else if(err.response?.status === 400&&err.response?.data?.message === "Password must be at least 6 characters"){
        alert("Password must be at least 6 characters")
      }


      
    }
  }

  return (
    <div className='flex justify-center items-center h-screen bg-linear-to-r from-indigo-300 via-purple-300 to-pink-300'>
      
      <form 
        onSubmit={submitform} 
        className='p-7 bg-white rounded-lg shadow-lg px-20'
      >
        <h1 className='p-3 text-center text-xl font-bold'>Register Form</h1>

        <div className='flex flex-col mb-2'>
          <label className='m-1'>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="border-2 border-gray-300 rounded-md p-2 mb-4"
            onChange={change}
          />
        </div>

        <div className='flex flex-col mb-2'>
          <label className='m-1'>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="border-2 border-gray-300 rounded-md p-2 mb-4"
            onChange={change}
          />
        </div>

        <div className='flex flex-col mb-2'>
          <label className='m-1'>Password:</label>
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
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'
        >
          Submit
        </button>

        <p className='mt-4 text-sm text-gray-600'>
          Already have an account? 
          <Link to="/Login" className='text-blue-500 hover:underline ml-1'>
            Login here
          </Link>
        </p>

      </form>
    </div>
  )
}

export default Registerform