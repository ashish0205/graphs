import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, Resolve } from "@angular/router";

import { Observable } from "rxjs";
import { map, first } from "rxjs/operators";
import { ProductService } from "../product.service";

@Injectable({
  providedIn: 'root'
})
export class GraphResolver implements Resolve<any> {
  constructor(
    private router: Router,
    private prodSvc: ProductService
  ) {}

  resolve(): Observable<any> | Promise<any> | any {
    return this.prodSvc.getProduct().pipe(
      map((client) => {
        if (client) {
          return client;
        } else {
          // id not found
          this.router.navigate(["/admin"]);
          return null;
        }
      }),
      first()
    );
  }
}
