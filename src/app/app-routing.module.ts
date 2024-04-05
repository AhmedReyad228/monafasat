import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadComponent:()=>import('./components/blanklayout/blanklayout.component').then((m)=>m.BlanklayoutComponent), children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent), title:'home'},
    {path:'register',loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent), title:'register'},
    {path:'login',loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent), title:'login'},
  ]},



  {path:'', loadComponent: ()=>import('./components/applayout/applayout.component').then((m)=>m.ApplayoutComponent), children:[
    {path:'', redirectTo:'app/dashbord', pathMatch:'full'},
    {path:'app/dashbord', loadComponent:()=>import('./components/dashbord/dashbord.component').then((m)=>m.DashbordComponent), title:'dashbord'},
    {path:'app/interests', loadComponent:()=>import('./components/interests/interests.component').then((m)=>m.InterestsComponent), title:'interests'},
    {path:'app/tenders', loadComponent:()=>import('./components/tenders/tenders.component').then((m)=>m.TendersComponent), title:'tenders'},
    {path:'app/prediction', loadComponent:()=>import('./components/prediction/prediction.component').then((m)=>m.PredictionComponent), title:'prediction'},
    {path:'app/availableTenders', loadComponent:()=>import('./components/available-tenders/available-tenders.component').then((m)=>m.AvailableTendersComponent), title:'availableTenders'},
    {path:'app/suppliersProfile', loadComponent:()=>import('./components/suppliers-profile/suppliers-profile.component').then((m)=>m.SuppliersProfileComponent), title:'suppliersProfile'},
    {path:'app/governmentalAgencies', loadComponent:()=>import('./components/governmental-agencies/governmental-agencies.component').then((m)=>m.GovernmentalAgenciesComponent), title:'governmentalAgencies'},
    {path:'app/subscriptionStripe', loadComponent:()=>import('./components/subscription-stripe/subscription-stripe.component').then((m)=>m.SubscriptionStripeComponent), title:'subscriptionStripe'},
    {path:'app/userProfile', loadComponent:()=>import('./components/user-profile/user-profile.component').then((m)=>m.UserProfileComponent), title:'userProfile'},
  ]},


  {path:'**', loadComponent: ()=>import('./components/notfound/notfound.component').then((m)=>m.NotfoundComponent), title:'NotFound'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/* {path:'', loadComponent:()=>import('./components/blank/blank.component').then((m)=>m.BlankComponent), children:[
    {path:'',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent), title:'home'},
    {path:'register',loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent), title:'register'},
    {path:'login',loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent), title:'login'},
  ]},



  {path:'applayout', loadComponent: ()=>import('./components/applayout/applayout.component').then((m)=>m.ApplayoutComponent), children:[
    {path:'dashbord', loadComponent:()=>import('./components/dashboard/dashboard.component').then((m)=>m.DashboardComponent), title:'dashboard'},
    {path:'interests', loadComponent:()=>import('./components/interests/interests.component').then((m)=>m.InterestsComponent), title:'interests'},
    {path:'tenders', loadComponent:()=>import('./components/tenders/tenders.component').then((m)=>m.TendersComponent), title:'tenders'},
    {path:'prediction', loadComponent:()=>import('./components/prediction/prediction.component').then((m)=>m.PredictionComponent), title:'prediction'},
    {path:'availableTenders', loadComponent:()=>import('./components/available-tenders/available-tenders.component').then((m)=>m.AvailableTendersComponent), title:'availableTenders'},
    {path:'suppliersProfile', loadComponent:()=>import('./components/suppliers-profile/suppliers-profile.component').then((m)=>m.SuppliersProfileComponent), title:'suppliersProfile'},
    {path:'governmentalAgencies', loadComponent:()=>import('./components/governmental-agencies/governmental-agencies.component').then((m)=>m.GovernmentalAgenciesComponent), title:'governmentalAgencies'},
    {path:'subscriptionStripe', loadComponent:()=>import('./components/subscription-stripe/subscription-stripe.component').then((m)=>m.SubscriptionStripeComponent), title:'subscriptionStripe'},
    {path:'userProfile', loadComponent:()=>import('./components/user-profile/user-profile.component').then((m)=>m.UserProfileComponent), title:'userProfile'},
  ]} */
