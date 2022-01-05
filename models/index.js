// require
const mongoose = require("mongoose");
// shortcut to mongoose.connection object, created by monoose.connect
const db = mongoose.connection;
const dbUrl = process.env.DATABASE_URL;
// const configs = {
//     useCreatedIndex: true,
//     useFindAndModify: false,
// };

mongoose
    .connect(dbUrl)
    .then(() => 
        console.log(`MongoDB successfully connected at ${db.host}:${db.port}! How dope!`))
    .catch((err) => 
        console.log(`MongoDB connection FAILED :( Error: err`));

module.exports = {
    Author: require("./Author")
};