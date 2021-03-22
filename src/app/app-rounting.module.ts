import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import {PortofolioComponent} from './pages/portofolio/portofolio.component';
import { ItemComponent } from './pages/item/item.component';


const app_routes: Routes = [
    {path:'home',component: PortofolioComponent},
    {path:'about',component: AboutComponent},
    {path:'item',component: ItemComponent},
    {path:'**', pathMatch: 'full', redirectTo:'/'}

]
@NgModule({
imports: [
    RouterModule.forRoot(app_routes, {useHash:true})],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}