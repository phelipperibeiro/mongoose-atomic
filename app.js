require('./db/config');

const CRUD = require('./pokemon-controller');

    
const query = { name: /OKmon/i };
const mod = { name: /charmander/i };
const data = {
    name: "charmander 2",
    description: "vai vai vai",
    type: "fogo",
    attack: 4,
    defense: 4,
    height: 3
}


CRUD.retrieve(query);
//CRUD.update(data, mod);
//CRUD.create(data);
//CRUD.delete(query);
    