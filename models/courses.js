//import mongoose
const mongoose= require('mongoose')

//connect to the database
mongoose.connect('mongodb://localhost/courses')
.then(()=> console.log('Connected to the server'))
.catch(err => console.error('Could not connect to the database', err))

//Database>>Collections(Table)>>Documents(Rows)

//The Collections should have a schema defined
const courseSchema= new mongoose.Schema({
    courseCode: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
    },
    author: String,
    category: {
        type: String,
        enum: ['web', 'mobile', 'network']
    },
    tags: [String],
    date: {type: Date, default: Date.now},
    iPublished: Boolean
})

//Make a Class or Model of the collection schema
//courseSchema and course name are different
const Course= mongoose.model('Course', courseSchema)

//exporrt the model class
exports.Course= Course