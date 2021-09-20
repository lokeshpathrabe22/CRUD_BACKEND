import express from 'express';
import route from './route/routes.js';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/users',route);

const PORT=8000;
const URL='mongodb+srv://user:mChm9CTbuc7XKKBp@crud.cecoo.mongodb.net/CRUDAPP?retryWrites=true&w=majority';

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port: ${PORT}`);
    });
}).catch(error=>{
    console.log('Error: ',error.message);
})