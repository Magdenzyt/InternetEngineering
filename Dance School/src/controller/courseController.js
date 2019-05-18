var mongoose = require('mongoose');
var Course = require('../model/course');
var User = require('../model/user');
var UserController = require('../controller/userController');
var {Request, Response} = require('express');

class CourseController{

    addCourse(req, res){
    
        var myData = new Course({name: req.body.name, teacherId: req.body.teacherId, description: req.body.description, price:req.body.price});
        myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
               
    }

    getCoursesByTeacherId(req, res){
        Course.find({teacherId: req.body.teacherId}).then((data)=>{
            res.status(200).send(JSON.stringify(data,undefined,2))
        }).catch((e)=>{
            res.status(400).send(e);
        });
    }

    getCourses(req, res){
        Course.find().then((data)=>{
            res.status(200).send(JSON.stringify(data,undefined,2))
        }).catch((e)=>{
            res.status(400).send(e);
        });
    }
    
}
module.exports = new CourseController();