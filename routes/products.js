import Router from "express";
import {getProducts, getProduct, getProductByCategory} from "../controllers/products.js"
const router = Router();

router.get("/",async(req, res)=>{
    res.send(await getProducts());
});
router.get("/:id",async(req, res)=>{
    let {id} = req.params;
    res.send(await getProduct(id));
});

router.get("/category/:id",async(req, res)=>{
    let {id} = req.params;
    res.send(await getProductByCategory(id));
});

export default router;