// TO START THE SERVER WRITE npm run watch IN CMD

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import Data from './models/dataSchema.js';
const app = express();

const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// Auto Reload
import livereload from 'livereload';
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname) + '/public');

import connectLivereload from 'connect-livereload';
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh('/');
    }, 100);
})



app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get('/', (req, res) => {

    // res.sendFile('/views/index.html', {root: __dirname});

    // result --> Array of objects
    Data.find()
    .then((result) => {
        res.render('index' , {myTitle: 'Welcome CRUD System'});
        console.log(result.length);
    })
    .catch((err) => {
        console.log(err);
    });
});



app.post('/', (req, res) => {
    const data = new Data({ 
         id: req.body.id,
         Userrr: req.body.Userrr
        , Age: req.body.Age
        , Country: req.body.Country
    });
    data.save().then(() => {
        console.log(req.body)
        res.redirect('/Done');
    })
    .catch((err) => {
        console.log(err);
    });
})


app.get('/Done', (req, res) => {

    Data.find()
    .then((result) => {
        res.render('Dashboard' , {Title: 'Dashboard' , arr: result});
    })
    .catch((err) => {
        console.log(err);
    });

})


app.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    
        Data.findByIdAndDelete(id)
        .then((result) => {
            res.redirect('/Done');
        })
        .catch((err) => {
            console.log(err);
        });
})


app.get('/update/:id', (req, res) => {
    const id = req.params.id;
    
        Data.findById(id)
        .then((result) => {
            res.render('Update' , {Title: 'Update' , arr: result});
        })
        .catch((err) => {
            console.log(err);
        });
})

app.post('/update/:id', (req, res) => {
    const id = req.params.id;
    const data = {
        Userrr: req.body.Userrr
        , Age: req.body.Age
        , Country: req.body.Country
    };
    Data.findByIdAndUpdate(id, data)
    .then((result) => {
        res.redirect('/Done');
    })
    .catch((err) => {
        console.log(err);
    });
})

app.get('/Tasks', (req, res) => {
    res.render('Tasks');
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



