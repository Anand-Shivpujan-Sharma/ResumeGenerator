import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import path from "path"
import ContactModel from "./ContactModel.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);


const app = express();

app.use(cors());
app.use(express.json());
app.use("/public",express.static(path.join(__dirname, '/public')));


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/resume')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname) )
    }
});
const resumeUpload = multer({ storage: storage })


app.post("/contact",resumeUpload.single("resume"), async (req, res) => {
    // const {}
    const {name,email,phone,message} = req.body
    const resume = req.file && `${req.protocol}://${req.get('host')}/${req.file.path}`;
    const contact = await ContactModel.create({name,email,phone,message,resume});
    if(contact){
        res.status(200).send(contact);
        console.log(contact);
    }else{
        res.status(400).send({});
    }
})


mongoose.connect("mongodb://127.0.0.1:27017/Resume").then(() => {
    console.log("then")
    app.listen(4000,()=>{
        console.log("Server started at " + 4000)
    });
}).catch(e => console.log(e.message));