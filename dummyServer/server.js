const express = require('express')
const router = require('./router/router')
const errorMiddleWare = require('./utils/errorMiddleWare')
const cors = require('cors')
const app = express()

port = 8006

app.use(express.json())
app.use(cors())
app.use('/',router)
app.use(errorMiddleWare)

app.listen(port,()=>{
    console.log(`Listening at: http://localhost${port}`)
})