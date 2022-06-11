import {Users} from '../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '../config'
import { token } from 'morgan'

 

export const singUp= async(req,res)=>{

    const passBcrypt=bcrypt.hashSync(req.body.password,10) 


    const {username,email}=req.body

    const newUser= new Users({
        username,
        email,
        password:passBcrypt
    })
     const savedUser= await newUser.save()
     const tokek = jwt.sign({id:savedUser.id},config.SECRET,{
        expiresIn:86400
     })
    res.json({tokek})
}
export const singIn= async(req,res)=>{
    res.json(token)
}
