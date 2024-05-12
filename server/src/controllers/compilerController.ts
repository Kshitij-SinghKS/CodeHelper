import { Request, Response } from 'express';
export const saveCode = async (req: Request, res: Response) => {
try {
    
} catch (error) {
   res.status(500).send({message:"Error in saving the code",error}) 
}
};