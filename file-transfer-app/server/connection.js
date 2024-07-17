const mongoose = require('mongoose')

async function connectMongoDb(url){
    mongoose
        .connect(url)
        .then(() => console.log("MongoDB Connected !"))
        .catch((err) => console.log("MongoDB Connection Error!", err));
}

module.exports = {
    connectMongoDb
}