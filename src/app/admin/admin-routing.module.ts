import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin-component/admin.component";
import { AdminMgtComponent } from "./admin-mgt.component";
// import { AuthGuard } from "@app/domain/guards/auth.guard";


// import { ProfileMgtComponent } from "./admin-mgt.component";
// import { ProfileResolver } from "./admin-resolver";
// import { ProfileUpdateComponent } from "./update-profile/update-profile.component";

const routes: Routes = [
  {
    path: "",
    component: AdminMgtComponent,
    data: {
     
    },
  //  canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: AdminComponent,
       
       // resolve: [ProfileResolver],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AdminRoutingModule {}
