import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './pages/clients/clients-list/clients-list.component';
import { LoginComponent } from './security/login/login.component';
import { ValidateAccessComponent } from './security/validate-access/validate-access.component';

const routes: Routes = [
  { path:'', component:LoginComponent },
  { path:'valid-access', component:ValidateAccessComponent} ,
  { path: 'clients', component:ClientsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
