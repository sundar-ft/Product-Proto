import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationDashboardComponent } from './application-dashboard/application-dashboard.component';
import { BasicdetailComponent } from './basicdetail/basicdetail.component';
import { FooterComponent } from './footer/footer.component';
import { HeadernavbarComponent } from './headernavbar/headernavbar.component';
import { KraVerificationComponent } from './kra-verification/kra-verification.component';
import { KycInformationComponent } from './kyc-information/kyc-information.component';
import { KycComponent } from './kyc/kyc.component';
import { Kyc1Component } from './kyc1/kyc1.component';
import { PermissionRequestComponent } from './permission-request/permission-request.component';
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
  },
  {
    path:"kyc1",
    component : Kyc1Component
  },
  {
    path:"kra",
    component : KraVerificationComponent
  },
  {
    path:"kycinfo",
    component : KycInformationComponent
  },
  {
    path:"permission",
    component : PermissionRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
