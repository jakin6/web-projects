const express=require('express');
const exphbs = require('express-handlebars')
const bodyParser=require('body-parser')

require('dotenv').config()

const app=express()
const port =process.env.PORT || 5000

//parsing middleware 
app.use(bodyParser.urlencoded({extended:true}))

//parse application/json
app.use(bodyParser.json())
//static files 
app.use(express.static('public'))

//Templating engine
const handlebars=exphbs.create({extname:'.hbs'})
app.engine('.hbs',handlebars.engine)
app.set('view engine','.hbs')

//route
const routes = require('./server/route/biblio')
app.use('/',routes)

// app.get('',(req,res) =>{
//     res.render('home')
// })

app.listen(port,()=>console.log(`Listening on port ${port}`))
