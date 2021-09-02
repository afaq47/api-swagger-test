import bodyParser from 'body-parser';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';
import { waitersOderSchema } from '../model/waiter.Oder.model';
import { waitersOder } from '../types/document/waiter.oder';
export class waitersOderAdmin {
  constructor() {}
  getAdmin(_id: string) {
    return waitersOderSchema.findById(_id);
  }
  saveAdmin(ADMin: waitersOder) {
    return new waitersOderSchema(ADMin).save();
  }
  updateAdmin(Admmin: waitersOder) {
    return waitersOderSchema.findByIdAndUpdate(Admmin._id, Admmin, {
      new: true
    });
  }
  deletAdmin(_id: string) {
    return waitersOderSchema.findByIdAndDelete(_id);
  }
  gettAdminslist() {
   return waitersOderSchema.find();
  }
  loginwaiter(body:any){
    return waitersOderSchema.findOne({email:body.email,password:body.password});
  }
  getoder(id:string){
    return waitersOderSchema.findById(id);
  }

}