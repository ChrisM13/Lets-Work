var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE_URL);

var db = mongoose.connection;
db.once('open', () => {
    console.log(`Connected to MongDB ${db.name} at ${db.host}:${db.port}`);
}); 