import express from 'express'
import dotenv from 'dotenv'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
const app = express();
app.use((req,res,next)=>{
    console.log("HELLO")
    next()
})

dotenv.config()

connectDB() 

app.get('/', (req,res) =>{

})



app.use('/api/products', productRoutes)
app.use(notFound)
app.use(errorHandler)




const PORT=process.env.PORT || 5000

app.listen(PORT, console.log(`SERVER RUNNING IN ${process.env.NODE_ENV} MODE ON PORT ${PORT}`));