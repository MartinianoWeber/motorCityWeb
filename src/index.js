const express = require('express')
const morgan = require('morgan')
const cors = require('cors')


// inicializaciones
const app = express()
// middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use((error, req, res, next) => {
    return res.json({
        error: error.menssage
    })
})




// routes
const logs = require('./routes/logs.routes')
app.use(logs)




// starting sv
app.listen(4000)
console.log('listening on port 4000')