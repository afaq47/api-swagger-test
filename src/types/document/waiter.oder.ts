import { Document } from 'mongoose';
export interface waitersOder extends Document {
  oder_id:string;
  Iteam: string;
  Desgination: string;
  cell: string;
  email: string;
  password:string;
  createdAt?: string;
  updatedAt?: string;
 
  
}