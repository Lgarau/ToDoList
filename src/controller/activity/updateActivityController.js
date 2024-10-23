import {updateActivity} from '../../service/activityService.js'
import activityNormalizer from '../../normalizer/activityNormalizer.js';

export default async (req, res) => {
    try {
        const activityId = req.params['id'];
        const activity = await updateActivity(activityId, req.body) 
        res.status(200).json(activityNormalizer(activity))    
    } catch (error) {
        console.log(error.message + " - Response Status: " + error.status);
        res.status(error.status || 500).json({ message: error.message })
    }
}