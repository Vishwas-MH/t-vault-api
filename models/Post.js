const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    // id:{
    //     type: Number,
    // },
    SafeName:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1,
    },
    Owner:{
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    Type:{
        type: String,
        required: true,
        enum: ["personal", "corporate", "others"],
    },
    Desc:{
        type: String,
        trim: true,
        minlength: 10,
    },
    folder:[{ 
        name: String,
    }],
    Updated: {
        type: Date,
        default: Date.now,
    }
    
});

module.exports = mongoose.model('Posts', PostSchema);