import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationDashboardComponent } from './application-dashboard/application-dashboard.component';
import { BasicdetailComponent } from './basicdetail/basicdetail.component';
import { FooterComponent } from './footer/footer.component';
import { HeadernavbarComponent } from './headernavbar/headernavbar.component';
import { KycComponent } from './kyc/kyc.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';



const routes: Routes = [
  {
    path: 'dashboard',
    component: ApplicationDashboardComponent,
  }, 
 
  {
    path: 'header',
    component:HeadernavbarComponent,
  }, 
  {
    path:"sidenav",
    component : SidenavbarComponent
  },
  {
    path:"footer",
    component : FooterComponent
  },
  {
    path:"basicdetail",
    component : BasicdetailComponent
  },
  {
    path:"kyc",
    component : KycComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
