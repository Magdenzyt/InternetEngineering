var mongoose = require('mongoose');
var User = require('../model/user');
var {Request, Response} = require('express');
var passport = require('passport');

class UserController{
    addUser(req, res){          
        console.log(req.body);
        var myData = req.body;
        console.log(myData);

        if(!myData.username) {
            return res.status(422).json({
                errors: {
                    username: 'is required',
                },
            });
        }
            
        if(!myData.password) {
            return res.status(422).json({
                errors: {
                    password: 'is required',
                },
            });
        }

        const finalUser = new User(myData);
        finalUser.setPassword(myData.password);

        return finalUser.save()
            .then(() => res.json({ User: finalUser.toAuthJSON() }));        
    }



    loginUser(req, res, next){
        console.log(req.body);
        var myData = req.body;  

        if(!myData.username) {
            return res.status(422).json({
                errors: {
                    username: 'is required',
                },
            });
        }

        if(!myData.password) {
            return res.status(422).json({
                errors: {
                    password: 'is required',
                },
            });
        }

        return passport.authenticate('local-login', { session: true }, (err, passportUser, info) => {

            if(err) {
                return next(err);
            }

            if(passportUser) {
                const user = passportUser;
                user.token = passportUser.generateJWT();
                console.log(user.token);
                return res.json({ user: user.toAuthJSON() });
            }
            
            return status(400).info;
        })(req, res, next);
    }

    sessionUser(req, res){
        const { payload: { id } } = req;

        return User.findById(id)
            .then((user) => {
                if(!user) {
                return res.sendStatus(400);
                }

                return res.json({ user: user.toAuthJSON() });
            });

    }

    getUsers(req, res){
        User.find().then((data)=>{
            res.status(200).send(JSON.stringify(data,undefined,2))
        }).catch((e)=>{
            res.status(400).send(e);
        });
    }

    getTeachers(req,res){
        User.find({role: "teacher"}).then((user) => {
            if(!user) return;
            var us = [];
            for(var i =0; i< user.length; i++){
                us[i] = {name: user[i].name, surname: user[i].surname}
            }
            res.status(200).send(JSON.stringify(us,undefined,2));
        }).catch((e)=>{
            res.status(400).send(e);
        });
    }
}
module.exports = new UserController();