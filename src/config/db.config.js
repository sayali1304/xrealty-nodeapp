const mongoose = require('mongoose');
require('dotenv').config()

const connect = () => {

    const url = process.env.MONGO_CONNECTION_STRING;
    console.log("process.env.MONGO_CONNECTION_STRING :" + process.env.MONGO_CONNECTION_STRING);

    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

    mongoose.connection.once("open", async () => {
        console.log("Connected to database");
    });
      
    mongoose.connection.on("error", (err) => {
        console.log("Error connecting to database  ", err);
    });
}

const disconnect = () => {
    
    if (!mongoose.connection) {
      return;
    }
    
    mongoose.disconnect();

    mongoose.once("close", async () => {
        console.log("Diconnected  to database");
    });

};

module.exports = {
    connect,
    disconnect
}