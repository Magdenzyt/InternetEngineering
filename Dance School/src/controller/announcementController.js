var mongoose = require('mongoose');
var Announcement = require('../model/announcement');
var {Request, Response} = require('express');

class AnnouncementController{

    addAnnouncement(req, res){
    
        const { payload: { id } } = req;

        var myData = new Announcement({teacherId: id, text: req.body.text, date: new Date()});
        myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
               
    }

    getAnnouncementByTeacherId(req, res){
        Announcement.find({teacherId: req.body.teacherId}).then((data)=>{
            res.status(200).send(JSON.stringify(data,undefined,2))
        }).catch((e)=>{
            res.status(400).send(e);
        });
    }

    getAnnouncements(req, res){
        Announcement.find().then((data)=>{
            res.status(200).send(JSON.stringify(data,undefined,2))
        }).catch((e)=>{
            res.status(400).send(e);
        });
    }

    deleteAnnouncementByDate(req, res){
        Announcement.remove({date: {$lte:new Date(req.body.year, req.body.month, req.body.day)}},(err, announcement)=>{
            if(err){
                res.send(err);
            }   
            res.send("Succesfully deleted!");
        });
    }
    
}
module.exports = new AnnouncementController();