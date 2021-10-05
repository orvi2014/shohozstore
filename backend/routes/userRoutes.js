import express from 'express';
import { authUser, getUserProfile, registerUser, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
const router=express.Router()



//Fetch All Products
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect,updateUserProfile)
router.route('/register').post(registerUser)



export default router