import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationDashboardComponent } from './application-dashboard/application-dashboard.component';
import { ApplicationQuickViewComponent } from './application-quick-view/application-quick-view.component';
import { BasicdetailComponent } from './basicdetail/basicdetail.component';
import { DocumentComponent } from './document/document.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FooterComponent } from './footer/footer.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { HeadernavbarComponent } from './headernavbar/headernavbar.component';
import { KraVerificationComponent } from './kra-verification/kra-verification.component';
import { KycInformationComponent } from './kyc-information/kyc-information.component';
import { KycComponent } from './kyc/kyc.component';
import { Kyc1Component } from './kyc1/kyc1.component';
import { LoginComponent } from './login/login.component';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
import { PermissionRequestComponent } from './permission-request/permission-request.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
  {
    path: '',
    component: ApplicationDashboardComponent,
  }, 
  {
    path: 'login',
    component: LoginComponent,
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
    path:"document",
    component : DocumentComponent
  },
  {
    path:"form",
    component : FormValidationComponent
  },
  {
    path:"permission",
    component : PermissionRequestComponent
  },
  {
    path:"quickview",
    component : ApplicationQuickViewComponent
  },
  {
    path:"modal",
    component : ModalpopupComponent
  },
  {
    path:"view",
    component:ViewComponent
  },
  {
    path:"drop",
    component:DropdownComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
