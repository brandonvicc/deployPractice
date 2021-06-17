const express = require('express')

const app = express();

app.set('view engine', 'ejs') // allows us to render information to the front end
app.set('views', __dirname+'/views')
app.use(express.json())
app.use(express.urlencoded({useNewUrlParser:true}))

//routing

app.get('/', (req,res)=>{
    res.render('index')
})

app.listen(process.env.PORT, function(){
    console.log('listening on localhost 8000')
})