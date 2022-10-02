const express = require('express');
const createError = require('http-errors');
const dotenv = require('dotenv').config();

console.log(dotenv.parsed);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Initialize DB
require('./initDB')();
app.all('/test/:id/:name', (req, res)=> {
        // console.log(req.query);
        // console.log(req.query.name);
        // res.send(req.query);
       
        console.log(req.params);
        res.send(req.params);
        
      
        console.log(req.body);
        res.send(req.body);
});

const ProductRoute = require('./routes/Product.route.js');
app.use('/products', ProductRoute);
//test
app.use('/test', ProductRoute);


//404 handler and pass to error handler
app.use((req, res, next) => {
    // const err = new  Error("Not Found");
    // err.status = 404;
    // next(err);
    next(createError(404, 'Not found'));
});

//Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server started on port' + PORT + '...');
});