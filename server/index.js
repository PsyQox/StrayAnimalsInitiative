require('dotenv').config()
const {PORT} = process.env 
const app = require("./src/app")
const {conn} = require('./src/db')


 conn.sync({force: false, alter:false}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server at ${PORT}`);
    })    
 })