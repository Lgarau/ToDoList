import {updateActivity} from '../../service/activityService.js'

export default async (req, res) => {
try {
    const  activityId = req.params['id'];
    const activity = await updateActivity(activityId, {...req.body, userId : req.userId})
    res.status(200).json(activity)
} catch (error) {
    res.status(errore.status || 500);
    res.send(JSON.stringify({message: error.message, code : error.code} ))
}
}