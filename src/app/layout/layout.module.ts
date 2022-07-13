import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardRoutingModule } from './layout-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductGraphsComponent } from './components/product-graphs/product-graphs.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, SidenavComponent, ProductTableComponent, ProductGraphsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
    NgApexchartsModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
