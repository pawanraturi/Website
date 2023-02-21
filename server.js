const express = require('express');
const app = express();
app.use(express.static(__dirname));



app.get('/', (req,res) =>{
    res.sendFile(__dirname + "/home.html");
})






app.listen(3000, ()=>{
    console.log("Server is up and running on port 3000");
})
