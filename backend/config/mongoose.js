

const DB='mongodb+srv://dev07dev:dev07dev@cluster0.9pbyf.mongodb.net/FavoritesMovies?retryWrites=true&w=majority'

const mongoose = require('mongoose');

mongoose.connect(DB,{})
.then(()=>{
    console.log('Connected to Mongo');
})
.catch(err =>{
    console.log('Error connecting to Mongo');
});