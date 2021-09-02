import express from 'express';

import jwt from "jsonwebtoken"
import { AdminwaiterRoutesApi } from './admin.waiter.routes';
import {  waiteroderRoutesApi } from './waiter.oder.Routes';
import { waiterOderController } from '../controller/waiters.oder.Admin';

import { AdminwaiterController } from '../controller/admin.waiter.controller';
export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.post ('/waiter/loginwaiter',async function (req,res) {
            const loginadmin = await new  waiterOderController().loginwaiter(req.body);
            const data = JSON.stringify(loginadmin);
            if(loginadmin){
                res.send(jwt.sign(data,"[abdcdefghij]"))
            }
            else{
                res.send("invlaidloginR")
            }
         })

        // this.router.post('/teachers_admin/teacherlogin',async function (req , res) {
        // const teacherloginadmin = await new waiterOderController().teacherlogin(req.body);
            
             
       
        this.router.use('/admin',AdminwaiterRoutesApi);
         this.router.use('/waiter',waiteroderRoutesApi);
        

    }


}
export const MainApi = new MainRouter().router;