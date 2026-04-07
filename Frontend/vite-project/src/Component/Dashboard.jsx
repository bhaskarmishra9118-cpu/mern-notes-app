import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Dashboard = () => {

  const navigate = useNavigate()

  useEffect(() => {

    const checkNotes = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4001/notes/getnotes",
          { withCredentials: true }
        )

        const notes = Array.isArray(res.data?.notes) ? res.data.notes : []
        if (notes.length > 0) {
          navigate("/getnotes")
        } else {
          navigate("/addnote")
        }

      } catch (err) {
        navigate("/login")
      }
    }

    checkNotes()

  }, [])

  return <h1>Loading...</h1>
}

export default Dashboard