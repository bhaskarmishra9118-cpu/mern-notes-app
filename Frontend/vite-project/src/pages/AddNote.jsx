import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddNote = () => {
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
        "https://mern-notes-app-48hb.onrender.com/notes/addnote",
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

      navigate("/getnotes")
    } catch (err) {
      console.log(err.response?.data || err.message)
      alert("Error creating note ❌")
    }
  }

  return (
    <div className="m-5 flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 rounded-2xl border-2 border-gray-500 p-6 shadow-md"
      >
        <h2 className="mb-4 text-xl font-bold">Add Note</h2>

        <label>Title</label><br />
        <input
          type="text"
          name="Title"
          value={formData.Title}
          onChange={handleChange}
          className="mb-3 w-full border p-2"
        />

        <label>Description</label><br />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mb-3 w-full border p-2"
        />

        <label>Info</label><br />
        <input
          type="text"
          name="info"
          value={formData.info}
          onChange={handleChange}
          className="mb-4 w-full border p-2"
        />

        <button
          type="submit"
          className="w-full rounded bg-blue-500 px-4 py-2 text-white"
        >
          Add Note
        </button>
      </form>
    </div>
  )
}

export default AddNote
