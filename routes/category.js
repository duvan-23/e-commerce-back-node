import Router from "express";
import {getCategorys} from "../controllers/category.js"
const router = Router();

router.get("/",async(req, res)=>{
    res.send(await getCategorys());
});

export default router;