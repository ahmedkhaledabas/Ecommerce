var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/produsts');
var aggregationRouter = require('./routes/aggregation');
var categoryRouter = require('./routes/category');
var brandsRouter = require('./routes/brands');
var orderRouter = require('./routes/order');

var app = express();

app.use(cors());
app.use(logger('dev'));

//connect to DB
mongoose.connect('mongodb://localhost/ecommerce', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database Connected .....')
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'productImage')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/order', orderRouter);
app.use('/aggregation', aggregationRouter);
app.use('/brands', brandsRouter);
app.use('/category', categoryRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
});

module.exports = app;
