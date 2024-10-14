import NotFoundException from '../../exception/NotFoundException.js';
import {retrieveActivity} from '../../service/activityService.js'
//import NotFoundException from '../../exception/NotFoundException.js';

export default async (req, res) => {

    try{
        const  activityId = req.params['id'];
        const activity = await retrieveActivity(activityId, req.userId)
        if (activity) {
            res.status(200).json(activity)
        } else {
            throw new NotFoundException('activity not found', 200200)
        }
    } catch (error) {
        res.status(404).json({ message: 'no activity found' });
        res.send(JSON.stringify({message: error.message, code : error.code} ))
    }
}

    
    