import { Injectable } from '@angular/core';
import { DataService } from '../data-service/data.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  productList = [{code: "tiendas-cr", name:"storeData" }, { code: "lubricantes", name:"lubeData" }, { code: "filtros" ,name:"filterData" }];

  constructor( private dataService : DataService) { 
  }

  getData(storeId: String, product: String){
    const dataIndex = this.dataService.store.findIndex( f =>{ return f.id ===storeId});
    const productIndex = this.productList.findIndex(p =>{return p.code === product});
    const resp = [...this.dataService.store[dataIndex][this.productList[productIndex]?.name]]
    
    return resp;
  }

  get storeData(){
    return this.dataService.store
  }
}
