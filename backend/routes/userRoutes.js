import express from 'express';
import { authUser, getUserProfile, registerUser, updateUserProfile, getUsers } from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
const router=express.Router()



//Fetch All Products
router.route('/').get(protect,admin, getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect,updateUserProfile)
router.route('/register').post(registerUser)



export default router