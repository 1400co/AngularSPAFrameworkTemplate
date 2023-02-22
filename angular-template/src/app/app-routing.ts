import { Routes } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { CountriesComponent } from './countries/countries.component'
import { SettingsComponent } from './settings/settings.component'

export const appRoutes: Routes =[
    {path: 'dashboard', component: DashboardComponent},
    {path: 'country-list/:count', component: CountriesComponent},
    {path: 'country-detail/:country', component: CountriesComponent},
    {path: 'country-maint', component: CountriesComponent},
    {path: 'settings', component: SettingsComponent},
    {path: '', component: DashboardComponent},
    {path: '**', component: DashboardComponent},
];