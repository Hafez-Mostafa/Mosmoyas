import { Router } from "express";
import * as CC from "./comment.controller.js";

const router = Router()



router.get('/', CC.getComments)
router.get('/upc/:id1/:id2', CC.getUPC)

router.post("/add", CC.createComment)
router.patch("/update/:id", CC.updateComment)
router.delete("/delete/:id", CC.deleteComment)


export default router