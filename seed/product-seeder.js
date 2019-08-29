var Product = require('../models/Product');

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopping", { useNewUrlParser: true });
var products = [
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        title: 'BMW',
        description: 'Awesome cars...!!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        title: 'BMW model 5',
        description: 'wonderful car...!!!!!',
        price: 40
    }),
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        title: 'BMW model 7',
        description: 'gretest car ever...!!!!!',
        price: 50
    })
];

var done = 0;
for(var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        console.log(done);
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
