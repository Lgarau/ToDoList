import mongoose from 'mongoose'
import { Schema } from 'mongoose';
//import NotFoundException from '../exception/NotFoundException';

const status = {
  open:'open',
  deleted:'deleted',
}

const activitySchema = new Schema({
    name: String,
    description: String,
    dueDate: { type: Date , default: Date.now },
    status: { type: String, default: status.open },
    ownerId: {type: Schema.Types.ObjectId, default: null},
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      writeConcern: {w: 1, wtimeout: 2000},
    }
  }
);
activitySchema.index({ name: 1 });
const activityModel = mongoose.model('activities', activitySchema);

const addActivity = async (data) => {
  data.ownerId = data.userId;
  const result = await new activityModel(data).save()
  return result.toJSON({versionKey: false})
}

const removeActivity = async (id, userId) => {
  return await update(id, {status: status.deleted, userId})
}

const updateActivity = async (id, params) => {
  const res = await activityModel.findOneAndUpdate(
    {_id:id, ownerId : params.userId},
    params,
    {upsert:false, new:true});
    if(!res) {
      throw new NotFoundException('Activity not found', 200100)
    }
  return res.toJSON({versionKey:false}) || res;
}
const retrieveActivity = async (id, userId) => {
  const res = await activityModel.findOne ({_id: id, ownerId: userId})
  if(!res) {
    throw new NotFoundException ('Activity not found', 200100)
  }
  return res.toJSON({versionKey: false});
}


export default {
  addActivity,
  updateActivity,
  removeActivity,
  retrieveActivity

}
