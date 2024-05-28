import { Router } from "express";
import * as PC from "./post.controller.js";

const router = Router()



router.get('/', PC.getPosts)
router.get('/up/:id', PC.getUP)
router.post("/add", PC.createPost)
router.patch("/update/:id", PC.updatePost)
router.delete("/delete/:id", PC.deletePost)


export default router