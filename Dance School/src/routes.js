const auth = require('./auth');
const courseController = require('./controller/courseController');
var Course = require('./model/course');
const userController = require('./controller/userController');
var User = require('./model/user');
const orderController = require('./controller/orderController');
var Order = require('./model/order');
const announcementController = require('./controller/announcementController');
var Announcement = require('./model/announcement');

const passport = require('./passport');

class Routes{
    constructor(){
        console.log("SETTING ROUTES");
    }

    roleAuthorization(roles){
 
        return function(req, res, next){
      
            const { payload: { id } } = req;

            User.findById(id, function(err, foundUser){
      
                if(err){
                    res.status(422).json({error: 'No user found.'});
                    return next(err);
                }
      
                if(roles.indexOf(foundUser.role) > -1){
                    return next();
                }
      
                res.status(401).json({error: 'You are not authorized to view this content'});
                return next('Unauthorized');
      
            });
      
        }
    }

    setRouting (app){

    
        app.get("/teacherCourses", courseController.getCoursesByTeacherId);
        app.get("/showAds", announcementController.getAnnouncementByTeacherId);
        app.get("/ads", announcementController.getAnnouncements);
        app.get("/courses",courseController.getCourses);
        app.get("/teachers",userController.getTeachers);

        app.post("/user/register", auth.optional, userController.addUser);
        app.post("/user/login", auth.optional, userController.loginUser);
        app.get("/user/current", auth.required, userController.sessionUser);
        

        app.post("/teacher/addCourse", auth.required, this.roleAuthorization(['teacher']), courseController.addCourse);
        app.get("/teacher/students", auth.required, this.roleAuthorization(['teacher']), orderController.getCourseStudents);
        app.post("/teacher/ad", auth.required, this.roleAuthorization(['teacher']),announcementController.addAnnouncement);
        app.post("/teacher/deleteAd", auth.required, this.roleAuthorization(['teacher']), announcementController.deleteAnnouncementByDate);
        
        app.get("/student/orders", auth.required, this.roleAuthorization(['student']), orderController.getOrdersbyId);        
        app.post("/student/makeOrder", auth.required, this.roleAuthorization(['student']), orderController.addOrder);
    }
}

module.exports = new Routes();