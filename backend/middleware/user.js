import express  from "express";
import { Login, Register } from "../controller/user.js";
const router = express.Router()


router.post("/user/signin" , Login)

router.post("/user/signup" , Register)

export default router