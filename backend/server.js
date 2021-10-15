import express from 'express'
import dotenv from 'dotenv'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
const app = express();
app.use((req,res,next)=>{
    next()
})

dotenv.config()

connectDB() 

app.use(express.json())

app.get('/', (req,res) =>{

})



app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.get('/api/config/paypal',(req,res)=> res.send(process.env.PAYPAL_CLIENT_ID))

app.use(notFound)
app.use(errorHandler)




const PORT=process.env.PORT || 5000

app.listen(PORT, console.log(`SERVER RUNNING IN ${process.env.NODE_ENV} MODE ON PORT ${PORT}`));