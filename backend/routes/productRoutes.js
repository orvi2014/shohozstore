import express from 'express';
import { getProducts, getProductById } from '../controllers/productController.js';

const router=express.Router()



//Fetch All Products
router.route('/').get(getProducts)

//Fetch Individual Product
router.route('/:id').get(getProductById)



export default router
