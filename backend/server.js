import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import uploadCarouselRoutes from './routes/uploadCarouselRoutes.js';
import path from 'path';
const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use((req,res,next)=>{
    next()
})

dotenv.config()

connectDB() 

app.use(express.json())





app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/uploadCarousel', uploadCarouselRoutes)

app.get('/api/config/paypal',(req,res)=> res.send(process.env.PAYPAL_CLIENT_ID))

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use('/carousel_uploads', express.static(path.join(__dirname, '/carousel_uploads')))


if(process.env.NODE_ENV === 'production'){
     app.use(express.static(path.join(__dirname,'..','frontend','build')))
     app.get('*',(req,res)=>{
         res.sendFile(path.join(__dirname,'..','frontend','build','index.html'))
     })
}else{
    app.get('/', (req,res) =>{
            console.log("API is Running !")
    })
}


app.use(notFound)
app.use(errorHandler)




const PORT=process.env.PORT || 5000

app.listen(PORT, console.log(`SERVER RUNNING IN ${process.env.NODE_ENV} MODE ON PORT ${PORT}`));