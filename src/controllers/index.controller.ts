import {Request,Response} from 'express';

const index = (req: Request,res: Response): Response => {
    return res.json({
        msg: "YOUR WELCOME TO API REST!!"
    });
}

export default {
    index
}