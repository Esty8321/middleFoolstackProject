require('dotenv').config()
const express = require('express')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConnection')
const { default: mongoose } = require('mongoose')
const app = express()
const PORT = process.env.PORT || 2000

connectDB()
app.use(express.json())
app.use(cors(corsOptions))
app.use(express.static('public'))


app.use('/user', require('./routes/userRoute'))
app.use('/post', require('./routes/postRoute'))
app.use('/todos', require('./routes/toDoRoute'))
app.use('/auth', require('./routes/authRoute'))

app.get('/', (req, res) => {
    res.send('home page')
})
mongoose.connection.once('open', () => {
    console.log('connected to mongoDB')
    app.listen(PORT, () => { console.log('running on port:' + PORT) })
})
mongoose.connection.on('error', (err) => { console.log('didnt succeed to connect for the database') })

