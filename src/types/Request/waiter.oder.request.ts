export interface SaveReqwaiterOder{
  Iteam: string;
  Desgination: string;
  cell: string;
  email: string;
  password:string;
  }
  export interface UpdateReqwaiterOder {
    oder_id:string;
    Iteam: string;
  Desgination: string;
  cell: string;
  email: string;
  password:string;
  }
  export interface GetwaiterOder {
    id: string
  }
  export interface DeletewaiterOder {
    id: string
  }
  export interface Reqtime {
    id: string
    time: string
    acceptoder:string
  }