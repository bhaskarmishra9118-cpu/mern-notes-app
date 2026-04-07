import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Getnote = () => {

  const [fetchdata, setfetchdata] = useState([])

  useEffect(() => {
    const getNotes = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4001/notes/getnotes",
          { withCredentials: true }
        )
        console.log(res.data)

        setfetchdata(Array.isArray(res.data?.notes) ? res.data.notes : [])

      } catch (err) {
        console.log(err)
        alert("Please login again")
      }
    }

    getNotes()
  }, [])

  const deleteNote = async (id) => {
    try {
      await axios.delete(
        `http://localhost:4001/notes/deletenote/${id}`,
        { withCredentials: true }
      )

      setfetchdata((prev) => prev.filter((note) => note._id !== id))

    } catch (err) {
      console.log(err)
      alert("Delete failed ❌")
    }
    
   }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
            Your Notes
          </h1>
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Total: {fetchdata.length}
          </span>
        </div>

        {fetchdata.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <p className="text-lg font-medium text-slate-700">No notes found</p>
            <p className="mt-1 text-sm text-slate-500">
              Add a note first, then it will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fetchdata.map((realdata) => (
              <div
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                key={realdata._id}
              >
                <h2 className="mb-2 line-clamp-1 text-xl font-semibold text-slate-800">
                  {realdata.Title}
                </h2>
                <p className="mb-3 line-clamp-3 text-sm leading-6 text-slate-600">
                  {realdata.description}
                </p>

                {realdata.info ? (
                  <p className="mb-5 rounded-md bg-slate-50 p-3 text-sm text-slate-700">
                    {realdata.info}
                  </p>
                ) : null}

                <button
                  onClick={() => deleteNote(realdata._id)}
                  className="w-full rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  Delete Note
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Getnote