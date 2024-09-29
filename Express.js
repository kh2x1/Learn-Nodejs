import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import Data from './models/dataSchema.js';


const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {

    // res.sendFile('/views/index.html', {root: __dirname});
    
    // result --> Array of objects
    Data.find()
    .then((result) => {
        console.log(result.length);

        res.render('index' , {Name: req.body.Userrr , myTitle: 'Welcome CRUD System' , arr: result});
    })
    .catch((err) => {
        console.log(err);
    });
});


app.post('/', (req, res) => {
    console.log(req.body.Userrr);

    const data = new Data({
        Userrr: req.body.Userrr
    });
    data.save().then(() => {
        console.log(req.body)
    })
    .catch((err) => {
        console.log(err);
    });

    
})





mongoose
.connect('mongodb+srv://Kh2x1:2tq693bqRrssHAeV@cluster0.ymwfh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    app.listen(3000, () => {
        console.log(`Server running on http://localhost:${port}`);
    }); })
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});



