import bodyParser from 'body-parser';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';
// import { MenuSchema } from '../model/menu.model';
// import { menuadmindoc } from '../types/document/menu';
// export class Menurepositories {
//   constructor() {}
//   getmenu(_id: string) {
//     return MenuSchema.findById(_id);
//   }
//   addmenu(ADMin: menuadmindoc) {
//     return new MenuSchema(ADMin).save();
//   }
//   updatemenu(Admmin: menuadmindoc) {
//     return MenuSchema.findByIdAndUpdate(Admmin._id, Admmin, {
//       new: true
//     });
//   }
//   deletmenu(_id: string) {
//     return MenuSchema.findByIdAndDelete(_id);
//   }
//   getmenuslist() {
//    return MenuSchema.find();
//   }
  // loginteacheradmin(body:any){
  //   return MenuSchema.findOne({email:body.email,password:body.password});
  // }
  // totalbill(_id:string) {
  //   return MenuSchema.findById(_id);
  //  }


  
   import { MenuSchema } from '../model/menu.model';
   import { menuadmindoc } from '../types/document/menu';
   export class Menurepositories {
     constructor() {}
     getmenu(_id: string) {
       return MenuSchema.findById(_id);
     }
     addmenu(ADMin: menuadmindoc) {
       return new MenuSchema(ADMin).save();
     }
     updatemenu(Admmin: menuadmindoc) {
       return MenuSchema.findByIdAndUpdate(Admmin._id, Admmin, {
         new: true
       });
     }
     deletmenu(_id: string) {
       return MenuSchema.findByIdAndDelete(_id);
     }
     getmenuslist() {
      return MenuSchema.find();
     }
    
   
   
   }


