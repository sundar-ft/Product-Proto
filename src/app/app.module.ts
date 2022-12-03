import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadernavbarComponent } from './headernavbar/headernavbar.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { SidebarModule } from 'ng-sidebar';
import { FooterComponent } from './footer/footer.component';
import { TabViewModule } from "primeng/tabview";
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { BasicdetailComponent } from './basicdetail/basicdetail.component';
import { KycComponent } from './kyc/kyc.component';
import { ApplicationDashboardComponent } from './application-dashboard/application-dashboard.component';
import {NgbPaginationModule, NgbAlertModule,NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import { PermissionRequestComponent } from './permission-request/permission-request.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { Kyc1Component } from './kyc1/kyc1.component';
import { KraVerificationComponent } from './kra-verification/kra-verification.component';
import { KycInformationComponent } from './kyc-information/kyc-information.component';
import { DocumentComponent } from './document/document.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ApplicationQuickViewComponent } from './application-quick-view/application-quick-view.component';
import {MatTabsModule} from '@angular/material/tabs';
import {TabModule} from 'angular-tabs-component';
import { BrowserAnimationsModule } from 
'@angular/platform-browser/animations';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadernavbarComponent,
    SidenavbarComponent,
    FooterComponent,
    BasicdetailComponent,
    KycComponent,
    ApplicationDashboardComponent,
    PermissionRequestComponent,
    Kyc1Component,
    KraVerificationComponent,
    KycInformationComponent,
    DocumentComponent,
    FormValidationComponent,
    ApplicationQuickViewComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    TabViewModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgOtpInputModule,
    NgbAccordionModule,
    ReactiveFormsModule,
    MatTabsModule,
    TabModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
