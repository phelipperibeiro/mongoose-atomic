const mongoose = require('mongoose');

const dbURI = 'mongodb://mongoose-pokemons:abc123@ds129085.mlab.com:29085/pokemons';

mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', function(){
    console.log('mongoose default connection connected to' + dbURI);
});

mongoose.connection.on('error', function(err){
    console.log('mongoose default connection error:' + err);
});

mongoose.connection.on('disconnected', function(){
    console.log('mongoose default connection disconnected');
});

mongoose.connection.on('open', function(){
    console.log('mongoose default connection is open');
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
       console.log('mongoose default connection disconnected through app terminal'); 
    });
});