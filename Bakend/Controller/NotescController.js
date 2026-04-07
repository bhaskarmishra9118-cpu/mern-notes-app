const mongoose = require("mongoose")
const notesdb = require("../Models/Notes")

const getUserId = (req) => req.userId || req.user?.id || req.user?._id

exports.createnotes = async (req, res) => {
  const { Title, description, info } = req.body

  try {
    const userId = getUserId(req)
    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized Access"
      })
    }

    if (!Title || !description) {
      return res.status(400).json({
        message: "These fields are required"
      })
    }

    const newnote = await notesdb.create({
      Title,
      description,
      info,
      user: userId
    })

    return res.status(201).json({
      message: "Note created",
      newnote
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message
    })
  }
}

exports.getallnotes = async (req, res) => {
  try {
    const userId = getUserId(req)
    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized Access"
      })
    }

    const notes = await notesdb.find({ user: userId }).sort({ createdAt: -1 })
    return res.status(200).json({
      message: "All Notes",
      notes
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message
    })
  }
}

exports.deleteNote = async (req, res) => {
  try {
    const userId = getUserId(req)
    const noteId = req.params.id

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized Access"
      })
    }

    if (!mongoose.Types.ObjectId.isValid(noteId)) {
      return res.status(400).json({
        message: "Invalid note id"
      })
    }

    const data = await notesdb.findOneAndDelete({ _id: noteId, user: userId })
    if (!data) {
      return res.status(404).json({
        message: "Note not found"
      })
    }

    return res.status(200).json({
      message: "Note deleted successfully",
      data
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message
    })
  }
}

exports.updateNote = async (req, res) => {
  const { Title, description, info } = req.body

  try {
    const userId = getUserId(req)
    const noteId = req.params.id

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized Access"
      })
    }

    if (!mongoose.Types.ObjectId.isValid(noteId)) {
      return res.status(400).json({
        message: "Invalid note id"
      })
    }

    const updatedFields = {}
    if (Title !== undefined) updatedFields.Title = Title
    if (description !== undefined) updatedFields.description = description
    if (info !== undefined) updatedFields.info = info

    const data = await notesdb.findOneAndUpdate(
      { _id: noteId, user: userId },
      updatedFields,
      { new: true }
    )

    if (!data) {
      return res.status(404).json({
        message: "Note not found"
      })
    }

    return res.status(200).json({
      message: "Note updated successfully",
      data
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message
    })
  }
}