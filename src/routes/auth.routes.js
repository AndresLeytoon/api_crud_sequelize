import {Router} from 'express'
import * as authCtrl from '../controllers/auth.controllers'
const router= Router()

router.post("/singup",authCtrl.singUp)
router.post("/singin",authCtrl.singIn)

export default router;