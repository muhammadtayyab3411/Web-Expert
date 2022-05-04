const express = require("express");
const app = express();
const mongoose = require("mongoose");
const validator = require("validator");
const bodyParser = require("body-parser");
const path = require("path");
const Db = "mongodb+srv://muhammadtayyab3411:tayyab3411@cluster0.9gkle.mongodb.net/web-expert-db?retryWrites=true&w=majority";
const port = process.env.port || 8000;

mongoose.connect(Db, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Connection successful");
}).catch(err => console.log(err));

const contactFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        uppercase: true
    },
    email: {
        type: String,
        validate(value){
            if(!validator.isEmail(value)){
                console.log("Invalid Email");
            }
        }
    },
    message:{
        type: String
    }
});

const Usermessage = new mongoose.model("Usermessage", contactFormSchema);

const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../Templates/views");
const partialsPath = path.join(__dirname, "../Templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);

app.use(express.static(staticPath));

// app.use(express.bodyParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", async(req, res) => {
    try{
        const newUserMessage = new Usermessage({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
        
        const newUserMessageData = await newUserMessage.save();
        res.status(201).render("index");
    }
    catch(err){
        res.status(400).send(err);
    }
});

app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
});

// tayyab3411