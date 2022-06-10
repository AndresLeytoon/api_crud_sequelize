import {Router} from 'express'
const router= Router()

router.get("/auth",(req,res)=>res.json("hola get products"))

export default router;