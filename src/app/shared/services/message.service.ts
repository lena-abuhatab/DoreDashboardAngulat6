import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class MessageService {
  messages: string[] = [];
  types: boolean;

  add(message: string, type: boolean) {
    this.messages.push(message);
    this.types = type;
  }
  constructor() {}
  clear() {
    this.messages = [];
  }
}
