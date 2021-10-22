const mongoose = require('mongoose');
const validate = require('mongoose-validator');
const secretSchema = require('./secrets');

var folderValidator = [
    validate({
    validator: 'matches',
    arguments: /^\w+$/,
  }),
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
  })
]


const PostSchema = mongoose.Schema({
    // id:{
    //     type: Number,
    // },
    SafeName:{
        type: String,
        required: true,
        unique: true,
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
        
        validator : (value) => {
            console.log(/^\w+$/.test(value));
        },
        message: props => `${props.value} is not valid!`,
        //validate: folderValidator,
    },
    Updated: {
        type: Date,
        default: Date.now,
    }
    
});

module.exports = mongoose.model('Posts', PostSchema);