import { Router } from "express";
import * as UC from "./user.controller.js";

const router = Router()

router.get('/', UC.getUsers)
router.post('/', UC.registerUser)
router.get("/login",UC.login)



export default router