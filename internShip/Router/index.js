var express = require('express');
var router = express.Router();
const authentication = require('./Authentication/authentication')
const user = require('./services/user.routes')
const session = require('./services/session.routes')
const event = require('./services/event.routes')
const planning = require('./services/planning.routes')
const feedbacks = require('./services/feedbacks.routes')
const booking = require('./services/booking.routes')
const verifyToken = require('../middleware/verify.token')
const checkRole = require('../middleware/verify.role');
children = require('./services/children.routes');


//Import Authentication's routes
router.post('/auth/user/register', authentication.signup)
router.post('/auth/user/login', authentication.login)
router.get('/auth/user/logout', authentication.logout)
router.get('/auth/user/data', authentication.getData )

//Import User's routes
router.get('/auth/user/getUser', /*verifyToken ,*/user.getUser)
router.get('/auth/user/login/getOneUser/:id', /*verifyToken,*/user.getUserById)
router.post('/auth/user/login/addUser',/* verifyToken,*/user.addUser)
router.put('/auth/user/login/updateUser/:id', /*verifyToken*/user.updateUser)
router.delete('/auth/user/login/deleteUser/:id',/*verifyToken*/ user.deleteUser)
router.put('/auth/user/login/putUser/:username',/*verifyToken*/ user.putUser)
router.delete('/auth/user/login/deleteUserByName/:username',/*verifyToken*/ user.deleteUserByName)
router.get('/auth/user/login/getOneUserByName/:username',/*verifyToken*/ user.getUserByName)
router.get('/auth/user/login/getUserByRole/:role',/*verifyToken*/ user.getUserByRole)
router.get('/auth/user/login/getUserByMail/:email',/*verifyToken*/ user.getUserByMail)



//Import Event's routes
router.get('/auth/user/getEvent', /*verifyToken ,checkRole('admin'),*/ event.getEvent)
router.get('/auth/user/login/getOneEvent/:id',/*verifyToken , */ event.getEventById)
router.post('/auth/user/login/addEvent', /*verifyToken ,*/ event.addEvent)
router.put('/auth/user/login/updateEvent/:id',/*verifyToken, */event.updateEvent)
router.delete('/auth/user/login/deleteEvent/:id',/*verifyToken,*/ event.deleteEvent)
router.put('/auth/user/login/putEvent/:title', event.putEvent)
router.delete('/auth/user/login/deletEventByTitle/:title', event.deleteEventByTitle )


//Import Planning's routes
router.get('/chillKid/getPlanning',/* verifyToken ,*/planning.getPlannings)
router.get('/chillKid/getOnePlanning/:id',/*verifyToken, */planning.getOnePlanning)
router.post('/chillKid/addPlanning', /*verifyToken,*/ planning.addPlanning)
router.put('/chillKid/updatePlanning/:id',/*verifyToken,*/ planning.updatePlanning)
router.delete('/chillKid/deletePlanning/:id',/*verifyToken,*/ planning.deletePlanning)
router.put('/chillKid/putPlanning/:session', planning.putPlanning)
router.delete('/chillKid/deletPlanningBySession/:session', planning.deletePlanningBySession )


//Import Feedbacks's routes
router.get('/chillKid/getFeedbacks', /*verifyToken ,*/feedbacks.getFeedbacks)
router.get('/chilldKid/getOneFeedbacks/:id',/*verifyToken,*/ feedbacks.getOneFeedbacks)
router.post('/chillKid/addFeedbacks',/*verifyToken,*/ feedbacks.addFeedbacks)
router.put('/chillKid/updateFeedbacks/:id',/*verifyToken,*/ feedbacks.updateFeedbacks)
router.delete('/chillKid/deleteFeedbacks/:id',/*verifyToken,*/ feedbacks.deleteFeedbacks)

//Import Session's routes
router.get('/chillKid/getSession', /*verifyToken ,*/ session.getSessions)
router.get('/chillKid/getOneSession/:id',verifyToken, session.getSessionById)
router.post('/chillKid/addSession',/*verifyToken,*/ session.addSession)
router.put('/chillKid/updateSession/:id',verifyToken, session.getSessions)
router.delete('/chillKid/deleteSession/:id',verifyToken, session.deleteSession)
router.put('/chillKid/putSession/:title', session.putSession)
router.delete('/chillKid/deleteSessionByTitle/:title', session.deleteSessionByTitle)


//Import Children'routes
router.get('/chillKid/getChild', /*verifyToken ,*/children.getChild)
router.get('/chillKid/getOneChild/:id', verifyToken,children.getChildById)
router.post('/chillKid/addChild',/* verifyToken,*/children.addChild)
router.put('/chillKid/updateChild/:firstName', /*verifyToken,*/children.updateChild)
router.delete('/chillKid/deleteChild/:id',/*verifyToken,*/ children.deleteChild)
router.delete('/chillKid/deleteChild/:firstName',/*verifyToken,*/ children.deleteUserByName)

//Import Booking's routes
router.get('/chillKid/getBooking', /*verifyToken ,*/booking.getBooking)
router.get('/chillKid/getBookingById/:id', /*verifyToken,*/booking.getBookingById)
router.post('/chillKid/addBooking',/* verifyToken,*/booking.addBooking)
router.put('/chillKid/login/updateBooking/:id', /*verifyToken*/booking.updateBooking)
router.delete('/chillKid/login/deleteBooking/:id',/*verifyToken*/ booking.deleteBooking)
router.put('/chillKid/login/putUser/:name',/*verifyToken*/ booking.putBooking)
router.delete('/chillKid/login/deleteBookingByName/:name',/*verifyToken*/ booking.deleteBooking)


module.exports = router;