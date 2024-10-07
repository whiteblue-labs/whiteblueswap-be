import express from 'express'
import cookies from 'cookie-parser'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { connectApp } from './config/index.js'
import route from './routes/index.js'
import { notFound, errorHandler } from './middlewares/index.js'
import redisClient from './config/redis.js';
import swagger from './config/swagger/index.js'

dotenv.config()

/*****************************Config application*******************************/
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('combined'))
app.use(cors({
    origin: [
        process.env.FRONTEND_HOST,
        'http://localhost:3000',
        'http://194.233.85.52:5555/',
    ],
    credentials: true
}))
app.use(cookies(process.env.COOKIE_SECRET))
/******************************************************************************/

//Connect to the database and start the server
connectApp(app)
//routing for application
route(app)

app.get('/cache/clear', async (req, res, next) => {
    await redisClient.del('enterprises');
    res.status(200).json('OK');
})

app.use('/api-docs', swagger.swaggerUi_serve, swagger.swaggerUi_setup)

//ERROR Handler middleware
app.use(notFound)
app.use(errorHandler)

