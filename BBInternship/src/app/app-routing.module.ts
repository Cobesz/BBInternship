import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CriteriaComponent} from "./criteria/criteria.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'criteria', component: CriteriaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
