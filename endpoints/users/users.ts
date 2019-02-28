import { Request, Response } from "express-serve-static-core";

const users = (req: Request, res: Response) => {
    res.json({ 'Hello World!': 'Test' });
};

export default users;