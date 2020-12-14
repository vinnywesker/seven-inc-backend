import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

const SECRET: any = process.env.SECRET;


const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    const editToken = token.split(' ');

    if (!editToken[1]) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(editToken[1], SECRET, (err: any) => {
        if (err) {
            console.log("token errado", editToken[1])
            return res.status(500).json({ auth: false, message: 'Falha na autenticação.' });
        }
        next();
    });
}

const generateToken = () => {
    const payload = { // esses dados fictícios iriam sair de um banco de dados, mas como é apenas uma simulação, vamos usar esses mesmo ....
        id: 1,
        user: 'usuario',
        email: 'email@email.com'
    }

    const token = jwt.sign(payload, SECRET, {
        expiresIn: 950400 // token com duração de 10 dias =D
    });
    return token;
}

export {
    verifyToken,
    generateToken
}