import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';

const routes: Routes = [
  {
    "path": "add-property",
    component: AddPropertyComponent
  },
  {
    "path": "buy-property",
    component: PropertyListComponent
  },
  {
    "path": "rent-property",
    component: PropertyListComponent
  },
  {
    "path": "property-details/:id",
    component: PropertyDetailsComponent
  },
  {
    "path": "property-list",
    component: PropertyListComponent
  },
  {
    "path": "user/login",
    component: UserLoginComponent
  },
  {
    "path": "user/registration",
    component: UserRegistrationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
