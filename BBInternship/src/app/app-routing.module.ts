import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CriteriaOverviewComponent} from "./criteria-overview/criteria-overview.component";
import {CriteriaDetailComponent} from "./criteria-detail/criteria-detail.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'criteria-overview', component: CriteriaOverviewComponent},
  {path: 'criteria-overview/1', component: CriteriaDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
