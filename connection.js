const mongoose = require('mongoose');
const database = "akasha_db";
const password = "666JyzE3nEK.UDx";
const URI = 'mongodb+srv://StarFiveTeam:'+password+'@akasha-db.cpnnt.mongodb.net/'+database+'?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log("Atlas en linea"))
    .catch(err => console.err(err))


module.exports = mongoose;