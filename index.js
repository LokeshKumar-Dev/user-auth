const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const mongodb = require('./mongoConfig')
const userRoute = require('./Routes/User')

const app = express()

dotenv.config();
mongodb()
app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))
app.use(cors({
    origin: '*'
}))

app.get('/', (req, res) => {
    res.send('works')
})
app.use('/user', userRoute)

app.listen('4000', () => {
    console.log('Server running on 4000')
})
