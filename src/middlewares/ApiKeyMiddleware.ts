import { NextFunction, Request, Response } from "express";

const ApiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers.authorization;

    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({ message: "Chave de API inválida" });
    }

    next();
};

export default ApiKeyMiddleware;
