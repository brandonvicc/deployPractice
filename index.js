const express = require('express')

const app = express();



app.use(express.json())
app.use(express.urlencoded({useNewUrlParser:true}))

//routing

app.get('/', (req,res)=>{
    res.render("index.html");
})

app.listen(process.env.PORT, function(){
    console.log('listening on localhost 8000')
})