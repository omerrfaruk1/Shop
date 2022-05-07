import { Injectable } from '@angular/core';
declare let alertify :any

@Injectable()
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message,2)
  }
  error(message:string){
    alertify.error(message,2)
  }
  warning(message:string){
    alertify.warning(message,2)
  }
}
