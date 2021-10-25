const mongoose = require('mongoose');

const secretSchema = mongoose.Schema({
    name: {
        type:String,
        required:true,
        minlength:3,
        unique:true,
        maxLength: 20,
    }
})

const PostSchema = mongoose.Schema({
    // id:{
    //     type: Number,
    // },
    SafeName:{
        type: String,
        required: true,
        unique: true,
        minlength: 1,
        //maxLength: 20,
    },
    Owner:{
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        //maxLength: 20,
    },
    Type:{
        type: String,
        enum: ["personal", "corporate", "others"],
        default: "personal",
    },
    Desc:{
        type: String,
        trim: true,
        minlength: 10,
    },
    folder:{
        type: [String],
        sparse:true,
    },
    Updated: {
        type: Date,
        default: Date.now,
    }
    
});

module.exports = mongoose.model('Posts', PostSchema);