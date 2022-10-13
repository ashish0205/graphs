import { Component } from "@angular/core";

@Component({
  template: ` <router-outlet></router-outlet>`,
})
export class AdminMgtComponent {
  constructor() {

    console.log("here");
  }
}
