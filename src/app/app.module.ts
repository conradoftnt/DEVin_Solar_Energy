import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UnitsComponent } from './components/units/units.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { UnitsListComponent } from './components/units/units-list/units-list.component';
import { UnitsNewComponent } from './components/units/units-new/units-new.component';
import { ActivatedUnitsComponent } from './components/dashboard/activated-units/activated-units.component';
import { DisabledUnitsComponent } from './components/dashboard/disabled-units/disabled-units.component';
import { AverageEnergyComponent } from './components/dashboard/average-energy/average-energy.component';
import { TotalUnitsComponent } from './components/dashboard/total-units/total-units.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: LoginScreenComponent,
  },
  {
    path: 'content',
    component: ContentComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: 'total',
            component: TotalUnitsComponent,
          },
          {
            path: 'actives',
            component: ActivatedUnitsComponent,
          },
          {
            path: 'disabled',
            component: DisabledUnitsComponent,
          },
          {
            path: 'avarage_energy',
            component: AverageEnergyComponent,
          },
        ],
      },
      {
        path: 'units',
        component: UnitsComponent,
        children: [
          {
            path: '',
            component: UnitsListComponent,
          },
          {
            path: 'new',
            component: UnitsNewComponent,
          },
        ],
      },
      {
        path: 'subscribe',
        component: SubscribeComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    ContentComponent,
    DashboardComponent,
    UnitsComponent,
    SubscribeComponent,
    UnitsListComponent,
    UnitsNewComponent,
    ActivatedUnitsComponent,
    DisabledUnitsComponent,
    AverageEnergyComponent,
    TotalUnitsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatIconModule,
    NoopAnimationsModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
