
module.exports = function (Schema, Name) {
    const mongoose = require('mongoose');
    return mongoose.model(Name, Schema);
};