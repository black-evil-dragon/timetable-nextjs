import { Request, Response } from 'express';

export const test = (req: Request, res: Response) => {
    res.send('Hello')
}

export const homePage = (req: Request, res: Response) => {
    res.sendFile(__dirname + '/index.html')
}
