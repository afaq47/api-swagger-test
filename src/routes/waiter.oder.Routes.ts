import express from 'express';
import { waiterOderController } from '../controller/waiters.oder.Admin';
import { AdminwaiterController } from '../controller/admin.waiter.controller';
import { DeletewaiterOder, GetwaiterOder, SaveReqwaiterOder, UpdateReqwaiterOder } from '../types/Request/waiter.oder.request';
import { SaveUpdateReswaiterOder } from '../types/Responses/waiter.oder.responses';
import apikeyjwt from '../Middleware/jwtauth';

export class waiteroderRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/WaiterSearchOderById',apikeyjwt, async (req, res, next) => {
      try {
        const getreq:GetwaiterOder = req.body;
          const admin:SaveUpdateReswaiterOder = await new waiterOderController().getadmin(getreq);
          res.send(admin);
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/WaiterSaveoder', async (req, res, next) => {
      try {
        const admin: SaveReqwaiterOder = req.body;
        const newAdmin:SaveUpdateReswaiterOder = await new waiterOderController().saveadmin(admin);
        res.status(200).json({
          message: newAdmin
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.delete('/waiterdeleteOder',apikeyjwt, async (req, res, next) => {
      try {
        const delreq:DeletewaiterOder = req.body;
        const Deleted_admin = await new waiterOderController().deletadmin(delreq);
        res.status(200).json({
          message: 'waiter Oder deleted'
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.get('/Waitergetoderlist',apikeyjwt, async (req, res, next) => {
      try {
        const adminList: SaveUpdateReswaiterOder[] = await new waiterOderController().getadminList();
        res.status(200).json({
          result: adminList
        });

      } catch (error) {
        next(error);
      }
    });
  }
}
export const waiteroderRoutesApi = new waiteroderRoutes().router;