const express = require('express');
const router = express.Router();
const Note= require('./../models/note');

// List of nodes with specific id

router.post("/list", async function (req, res) {
    var notes = await Note.find({ userid: req.body.userid });
    res.json(notes);
});

// Addind & Updating notes

router.post("/add", async function (req, res) {
    /* if a note already exist with this given id, then it will be deleted and a new 
    note will be added with same id but maybe some other field different, basically 
    it is a logic for updation, we are not creating different route for updation we are
    doing it in the same route*/
    await Note.deleteOne({ id: req.body.id });
    const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
    });
    await newNote.save();
    const response = { message: "New Note Created" + `id: ${req.body.id}` };
    res.json(response);
});

// Deleting notes

router.post("/delete", async function (req, res) {
    await Note.deleteOne({ id: req.body.id });
    const response = { message: "Note deleted on " + `id: ${req.body.id}` };
    res.json(response);

});

module.exports = router;