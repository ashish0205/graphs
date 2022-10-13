import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

// import { StoreModule } from "@ngrx/store";
// import { EffectsModule } from "@ngrx/effects";

import { AdminMgtComponent } from "./admin-mgt.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin-component/admin.component";
// import { ProfileUpdateComponent } from "./update-profile/update-profile.component";
// import { FEATURE_KEY, reducer } from "./reducers/profile-reducer";
// import { ProfileEffects } from "./effects/profile.effects";
// import { UpdatePasswordComponent } from "./update-password/update-password.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    // StoreModule.forFeature(FEATURE_KEY, reducer),
    // EffectsModule.forFeature([ProfileEffects]),
    ReactiveFormsModule,
  ],
  declarations: [
  AdminComponent,
  AdminMgtComponent,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {
  constructor() {}
}
