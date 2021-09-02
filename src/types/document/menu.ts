import { Document } from 'mongoose';
export interface menuadmindoc extends Document {
  Iteam_id:string;
  IteamName: string;
  Price: string;
  createdAt?: string;
  updatedAt?: string;
}