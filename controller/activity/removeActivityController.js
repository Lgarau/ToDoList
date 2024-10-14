import {removeActivity} from '../../service/activityService.js'

export default async (req, res) => {
    try {
    const activityId = req.params['id'];
    const activity = await removeActivity(activityId, req.userId)
    res.status(200).json(activity)
} catch (error) {
    res.status(error.status || 500);
    res.send(JSON.stringify({message: error.message, code: error.code} ))
    }
    
}