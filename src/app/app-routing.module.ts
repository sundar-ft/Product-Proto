import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicdetailComponent } from './basicdetail/basicdetail.component';
import { FooterComponent } from './footer/footer.component';
import { HeadernavbarComponent } from './headernavbar/headernavbar.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { SumanComponent } from './suman/suman.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  }, 
  {
    path: 'suman',
    component:SumanComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
