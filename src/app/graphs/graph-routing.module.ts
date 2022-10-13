import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GraphMgtComponent } from "./graph-mgt.component";

import { GraphsComponent } from "./graph-component/graphs.component";
import { GraphResolver } from "./graph-resolver";

const routes: Routes = [
  {
    path: "",
    component: GraphMgtComponent,
    data: {
     
    },
  //  canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: GraphsComponent,
      },
      
    ],
    resolve: [GraphResolver]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class GraphRoutingModule {}
