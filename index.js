const express = require('express');

const app = express();

const cors = require('cors');

const routes = require("./src/routes/routes")

const authRoutes = require("./src/routes/auth")

const dbconfig = require("./src/config/db.config")

const port = 4000;

app.listen(port,(error) =>{

    if(error){
        console.log("error in connection")
    }
    else{
        dbconfig.connect();
        console.log("app started on port : " + port )
    }

})

app.use(express.json() , cors()); 
app.use('/',routes)
app.use('/',authRoutes)

