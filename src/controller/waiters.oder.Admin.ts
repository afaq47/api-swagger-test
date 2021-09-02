import {  waitersOder } from '../types/document/waiter.oder';
import { waitersOderAdmin } from '../repositories/waiters.oder.repositories';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import { SaveUpdateReswaiterOder } from '../types/Responses/waiter.oder.responses';
import { DeletewaiterOder, GetwaiterOder, SaveReqwaiterOder,UpdateReqwaiterOder } from '../types/Request/waiter.oder.request';


@Route('waiter')
@Tags('waiterOder_admin')

export class waiterOderController {
  constructor() { }
  @Security("api_keyjwt")
  @Post("/WaiterSearchOderById")
  async getadmin(@Body() getreq:GetwaiterOder): Promise<SaveUpdateReswaiterOder> {
    const admin: any = await new waitersOderAdmin().getAdmin(getreq.id);
    if (admin === null) throw new CustomeError(404, 'waiter oder not found');
    return <SaveUpdateReswaiterOder>admin;
  }
  @Post('/WaiterSaveoder')
  async saveadmin(@Body() admin: SaveReqwaiterOder): Promise<SaveUpdateReswaiterOder> {
    const new_admin: waitersOder = await new waitersOderAdmin().saveAdmin(<waitersOder>(admin));
    return <SaveUpdateReswaiterOder>(new_admin);
  }
 
  @Delete('/waiterdeleteOder')
  @SuccessResponse("200","waiter Oder deleted")
  async deletadmin(@Body() delreq: DeletewaiterOder) {
    return await new waitersOderAdmin().deletAdmin(delreq.id);
  }
  @Get('/Waitergetoderlist')
  async getadminList(): Promise<SaveUpdateReswaiterOder[]> {
    const admin:  waitersOder[] = await new waitersOderAdmin().gettAdminslist();
    return <SaveUpdateReswaiterOder[]>(admin);
  }


  @Post('/loginwaiter')
  async loginwaiter(@Body() body:{email:string,password:string} ): Promise<any> {
    const admin: waitersOder | null = await new  waitersOderAdmin().loginwaiter(body);
    return <SaveUpdateReswaiterOder>admin;
  }
 
  
}