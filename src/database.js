const mongoose = require("mongoose");

const URI = "mongodb://localhost/cafeteriadb";

mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then((db) => console.log("base de datos conectada"))
    .catch((err) => console.error(err));

module.exports = mongoose;