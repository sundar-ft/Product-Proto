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
import {FormsModule} from "@angular/forms";
import { BasicdetailComponent } from './basicdetail/basicdetail.component';
import { KycComponent } from './kyc/kyc.component';
import { ApplicationDashboardComponent } from './application-dashboard/application-dashboard.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { PermissionRequestComponent } from './permission-request/permission-request.component';



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
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
