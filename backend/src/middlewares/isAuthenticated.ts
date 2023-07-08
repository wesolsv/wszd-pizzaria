import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad{
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){
    // Recebe o token
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();
    }
    const [, token] = authToken.split(" ")

    try{
       //Validar token
       const {sub} = verify(
            token,
            process.env.JWT_SECRET
       ) as PayLoad;

       //Recuperar o id do token
       req.user_id = sub;
       
       return next();
    }catch(err){
        return res.status(401).end();
    }
    
}