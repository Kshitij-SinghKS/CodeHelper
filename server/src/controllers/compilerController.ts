import { Request, Response } from 'express';
import { Code } from '../models/Code';

export const saveCode = async (req: Request, res: Response) => {
  
   const { fullCode } = req.body;

   try {
      const newCode = await Code.create({
         fullCode: fullCode
      });
      return res.status(201).send({ url:newCode._id , message: "Code saved successfully"});
   } catch (error) {
      res.status(500).send({ message: "Error in saving the code", error });
   }
};

export const loadCode = async (req: Request, res: Response) => {
   const {urlId} = req.body;
   try{
      const existingCode = await Code.findById(urlId); //or use findOne
      if(!existingCode){
         return res.status(404).send({message: "Code not found"});
      }
      return res.status(200).send({message: "Code loaded successfully", fullCode: existingCode.fullCode});
   }
   catch(error){
      res.status(500).send({ message: "Error in loading the code", error });
   }
}