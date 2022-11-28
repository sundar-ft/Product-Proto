import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SumanComponent } from './suman/suman.component';
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



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SumanComponent,
    HeadernavbarComponent,
    SidenavbarComponent,
    FooterComponent,
    BasicdetailComponent,
  
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
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
