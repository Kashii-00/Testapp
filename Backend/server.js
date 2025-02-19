const expres = require('express');
const dotenv =  require ('dotenv').config()
const port = 5000

const app = expres()

app.listen(port,() => console.log(`Server started on port ${port}`))
console.log("helloworld");