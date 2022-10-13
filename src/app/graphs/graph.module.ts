import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { GraphsComponent } from "./graph-component/graphs.component";
import { GraphRoutingModule } from "./graph-routing.module";
import { GraphMgtComponent } from "./graph-mgt.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  imports: [
    CommonModule,
    GraphRoutingModule,
    NgxChartsModule,
   // BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  declarations: [
  GraphsComponent,
    GraphMgtComponent,
  ],

  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GraphModule {
  constructor() {}
}
