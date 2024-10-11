/**
 * VALIDATORS
 */
import createActivityValidator from '../validator/activity/createValidator.js'
import updateActivityValidator from '../validator/activity/updateValidator.js'
import createUserValidator from '../validator/user/createValidator.js'
import loginValidator from '../validator/user/loginValidator.js'


/**
 * ACTIVITY CONTROLLERS
 */
import addActivityController from './activity/addActivityController.js'
import retrieveActivityController from './activity/retrieveActivityController.js'
import removeActivityController from './activity/removeActivityController.js'
import updateActivityController from './activity/updateActivityController.js'
import loginController from './user/loginController.js';

/**
 * USER CONTROLLERS
 */
import createUserController from './user/createUserController.js'
import checkUserMailController from './user/checkUserMailController.js'
                                                                     
const setup = (app) => {
    app.get('/acitivity/:id', retrieveActivityController);
    app.post('/acitivity', createActivityValidator, addActivityController);
    app.patch('/acitivity/:id', updateActivityValidator, updateActivityController);
    app.delete('/acitivity/:id', removeActivityController);
    //definire app.use dopo la route app.post, app.patch
    app.post('/user',createUserValidator, createUserController);
    app.get('/user/:id/confirm/:registrationToken',checkUserMailController);
    app.post('/user/login', loginValidator, loginController);

    app.use((err, req, res, next) => {
        if (err && err.error && err.error.isJoi) {
            res.status(400).json({
                type: err.type,
                message: err.error.toString()
            })

        } else {
            next(err);
        }
    })
}

export default setup;