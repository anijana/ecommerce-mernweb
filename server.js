import express  from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv';
import DefaultData from "./default.js";
import Router from "./routes/route.js";
import cors from 'cors';
import bodyParser from 'body-parser';
import path from "path";


const __dirname = path.resolve();

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', Router);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get('*', function(_, res) {
    res.sendFile(path.join(__dirname,"./client/build/index.html"), function(err) {
        res.status(500).send(err);
    })
})

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URL || `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce-webpage.as1lbm0.mongodb.net/?retryWrites=true&w=majority`;


Connection(URL);


app.listen(PORT, () =>{
    console.log(`server is running successfully on port ${PORT}`);
});

DefaultData();



