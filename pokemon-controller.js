const PokemonSchema = require('./schema');
const Model = require('./model')(PokemonSchema, 'Pokemons');

const CRUD =  {
    
    create: function(data){
        
        //const data = { name: 'pikachu' }
        const Pokemon = new Model(data);

        Pokemon.save(function(err, data){
            if(err){ return console.log('ERRO: ', err); }
            return console.log('Inseriu:', data);
        });
                
    },    
    retrieve: function(query){
        
        //const query = {name: /OKmon/i, attack: {$gt: 90}};
        //const query = { name: /OKmon/i };
        
        Model.find(query, function(err, data){
            if(err){ return console.log('ERRO: ', err); }
            return console.log('Pegou:', data);
        });
                
    },    
    update: function(query, mod){
        
        //const query = {name: /OKmon/i};
        //const mod = {attack: 333};
        
        const options = {};
        
        Model.updateMany(query, mod, options,function(err, data){
            if(err){ return console.log('ERRO: ', err); }
            return console.log('Alterou:', data);
        });
        
    },    
    delete: function(query){
        
        //const query = {name: /OKmon/i};
        
        Model.deleteMany(query, function(err, data){	
            if(err){ return console.log('ERRO: ', err); }
            return console.log('Deletou:', data);
        });
    }    
}

//CRUD.retrieve();
module.exports = CRUD;




