import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, Resolve } from "@angular/router";

import { Observable } from "rxjs";
import { map, first } from "rxjs/operators";

// import { User } from "@app/accounts/models/user.model";

// import { AuthService } from "@app/domain/services/auth.service";
// import { UserService } from "@app/domain/services/user.service";

@Injectable()
export class AdminResolver implements Resolve<any> {
  constructor(
   // private authService: AuthService,
    private router: Router,
   // private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> | Promise<any> | any {
    const id = route.paramMap.get("id");
    return id;

    // return this.userService.getUser(id).pipe(
    //   map((client) => {
    //     if (client) {
    //       return client;
    //     } else {
    //       // id not found
    //       this.router.navigate(["/profile"]);
    //       return null;
    //     }
    //   }),
    //   first()
    // );
  }
}
