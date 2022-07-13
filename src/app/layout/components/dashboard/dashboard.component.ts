import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/services/dashboard-service/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  storeList = [{ code: "0056", name: `0056` }, { code: "0599", name: `0599` }, { code: "1132", name: `1132` }];
  productList = [{ code: "01", name: "tiendas-cr" }, { code: "02", name: "lubricantes" }, { code: "03", name: "filtros" }];
  form :FormGroup;
  dataSource= [];

  constructor(private dashboardService : DashboardService) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      product: new FormControl('', Validators.required),
      store: new FormControl('', Validators.required),
    });
  }

  search(){
    const store = this.form.get('store')?.value?.name;
    const product = this.form.get('product')?.value?.name;
    this.dataSource = this.dashboardService.getData(store, product)
  }

}
