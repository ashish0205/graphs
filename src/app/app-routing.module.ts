import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
   {
        path: "admin",
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
        //    runGuardsAndResolvers: "always",
  },
    {
        path: "graphs",
        loadChildren: () =>
          import("./graphs/graph.module").then((m) => m.GraphModule),
        //    runGuardsAndResolvers: "always",
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
