import mongoose from 'mongoose';
import autoIncrement, { initialize } from "mongoose-auto-increment"

const userSchema=mongoose.Schema({
    name: String,
    username: String,
    mail: String,
    phone:Number
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'user');
const user=mongoose.model('user',userSchema);

export default user;