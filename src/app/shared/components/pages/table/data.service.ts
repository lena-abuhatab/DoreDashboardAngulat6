import { Order } from "../../../../../assets/data";

import { AppConfig } from "./../../../../configs/app.config";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class Service {
  orderUrl: string;

  constructor() {
    this.orderUrl = AppConfig.endpoints.order;
  }

  getOrders() {
    // return this.orderUrl;
  }
  // getHeroById(id: any): Order[] {
  //   return `${this.orderUrl}/${id}`;
  // }
}
