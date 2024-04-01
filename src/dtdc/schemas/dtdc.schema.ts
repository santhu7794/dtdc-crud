import { Schema, Document } from 'mongoose';
export const dtdcSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  username: String,
  gender: String,
});
export interface Dtdc extends Document {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  gender: string;
}
