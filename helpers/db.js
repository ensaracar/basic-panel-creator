var mongoose = require("mongoose");

module.exports = () => {
    const uri = "mongodb+srv://ensarTestDb:test123@cluster0.icu7z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true } );

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
}


