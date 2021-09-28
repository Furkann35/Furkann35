// import { Byte } from "@angular/compiler/src/util";

export interface User{
    Id:number;
    firstName:string;
    lastName:string;
    email:string;
    // passwordSalt:Byte[];
    // passwordHash:Byte[];
    status:boolean;
  }