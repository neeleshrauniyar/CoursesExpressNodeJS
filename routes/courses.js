const express= require('express')
const router= express.Router()
const {Course}= require('../models/courses')

//middeware to use json
router.use(express.json())

//get
router.get("/courses", async(req, res)=>{
    const courses= await Course.find().sort('name')
    res.send(courses)
})

//post
router.post("/courses/createcourse", async(req, res)=>{
    let course= new Course({
        courseCode: req.body.courseCode,
        name: req.body.name,
        author: req.body.author,
        category: req.body.category,
        tags: req.body.tags,
        iPublished: req.body.iPublished
    })
    res.send(course)
    course.save()
})

//put
router.put("/courses/:id", async (req, res)=>{
    const course= await Course.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    }, { new: true})
    
    if(!course) return res.send("Course could not be found")
    
    res.send(course)
})

//delete
router.delete("/courses/:id", async (req, res)=>{
    const course= await Course.findByIdAndDelete(req.params.id)
    if (!course) return res.send("Course could not be found")
    res.send("Course deleted")
})

module.exports= router