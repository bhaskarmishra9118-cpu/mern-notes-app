import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../lib/api"

const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const checkNotes = async () => {
      try {
        const res = await api.get("/notes/getnotes")

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
  }, [navigate])

  return <h1>Loading...</h1>
}

export default Dashboard
