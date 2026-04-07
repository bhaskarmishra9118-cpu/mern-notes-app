import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Addnote = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    Title: "",
    description: "",
    info: ""
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await axios.post(
        "http://localhost:4001/notes/addnote",
        formData,
        { withCredentials: true }
      )

      console.log(res.data)
      alert("Note created successfully ✅")

      setFormData({
        Title: "",
        description: "",
        info: ""
      })

      navigate("/getnotes") // 🔥 redirect

    } catch (err) {
      console.log(err.response?.data || err.message)
      alert("Error creating note ❌")
    }
  }

  return (
    <div className='m-5 flex justify-center items-center min-h-screen'>
      
      <form 
        onSubmit={handleSubmit} 
        className='border-2 border-gray-500 rounded-2xl p-6 shadow-md w-96'
      >

        <h2 className='text-xl font-bold mb-4'>Add Note</h2>

        <label>Title</label><br />
        <input 
          type="text"
          name='Title'
          value={formData.Title}
          onChange={handleChange}
          className='border p-2 w-full mb-3'
        />

        <label>Description</label><br/>
        <input 
          type="text"
          name='description'
          value={formData.description}
          onChange={handleChange}
          className='border p-2 w-full mb-3'
        />

        <label>Info</label><br/>
        <input 
          type="text"
          name='info'
          value={formData.info}
          onChange={handleChange}
          className='border p-2 w-full mb-4'
        />

        <button 
          type="submit"
          className='bg-blue-500 text-white px-4 py-2 rounded w-full'
        >
          Add Note
        </button>

      </form>
    </div>
  )
}

export default Addnote