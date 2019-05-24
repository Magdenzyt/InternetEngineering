var mongoose = require('mongoose');
var Order = require('../model/order');
var User = require('../model/user');
var Course = require('../model/course');
var {Request, Response} = require('express');

class OrderController{
    
    addOrder(req, res){
        
        const { payload: { id } } = req;

        //console.log(req.body.courseId);
        //console.log(id);

        var query = {studentId: id};
        Order.find(query).then((order)=>{
            if(!order) return;
            else 
                var history = order.length;
          		Course.findById(req.body.courseId).then((course) => {

            		if(!course) return;
                	var price = course.price;
                      price = Math.pow(0.80,history)*price;
                      
                    var myData = new Order({courseId: req.body.courseId, studentId: id});        

                    myData.save()
                    .then(()=> {
                        res.send(JSON.stringify({price:price}));
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(400).send("There's a problem with your order");
                    });
        		});
        });
    }

    getOrdersbyId(req, res){
        const { payload: { id } } = req;

        var query = {studentId: id};
        Order.find(query).then((data)=>{

            var coursesIds=[];
            for(var i=0; i<data.length; i++){                 
                coursesIds[i] = data[i].courseId;           
            }

            Course.find({_id: {$in: coursesIds}}).then((course) => {
                if(!course) return;
                console.log(course);
                res.status(200).send(JSON.stringify(course,undefined,2));
            });

        }).catch((e)=>{
            res.status(400).send(e);
        });
    }

    getCourseStudents(req, res){
        console.log("asd");
        var query = {courseId: req.body.courseId};
        Order.find(query).then((data)=>{

            var studentIds=[];
            for(var i=0; i<data.length; i++){                 
                studentIds[i] = data[i].studentId;           
            }

            User.find({_id: {$in: studentIds}}).then((user) => {
                if(!user) return;
                var safeStudents = [];
                for(var i =0; i< user.length; i++){
                    safeStudents[i] = {name: user[i].name, surname: user[i].surname}
                }
                res.status(200).send(JSON.stringify(safeStudents,undefined,2));
            });

        }).catch((e)=>{
            res.status(400).send(e);
        });
    }

    getOrders(req, res){
        Order.find().then((data)=>{
            res.status(200).send(JSON.stringify(data,undefined,2))
        }).catch((e)=>{
            res.status(400).send(e);
        });
    }
}
module.exports = new OrderController();