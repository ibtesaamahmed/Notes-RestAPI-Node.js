const mongoose = require('mongoose');

// Steps:

// 1- Defining Schema -> Model details

const noteSchema=mongoose.Schema({
    id:{
        type: String,
        unique: true,
        required: true
    },
    userid:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
    },
    dateadded:{
        type: Date,
        default: Date.now,
    },
});

// 2- Create Model and Export

module.exports = mongoose.model("Note",noteSchema);