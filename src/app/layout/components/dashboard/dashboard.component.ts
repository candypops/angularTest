import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  storeList = [{ code: "0056", name: `Tienda 0056` }, { code: "0599", name: `Tienda 0599` }, { code: "1132", name: `Tienda 1132` }];
  sectorList = [{ code: "01", name: "tiendas-cr" }, { code: "02", name: "lubricantes" }, { code: "03", name: "filtros" }];
  form :FormGroup;
  constructor() {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      sector: new FormControl('', Validators.required),
      store: new FormControl('', Validators.required),
    });
  }


}
