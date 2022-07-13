import { Injectable } from '@angular/core';
import STOCK_0056_FILTROS from '../../../assets/data/stock_histories_0056_filtros.json'
import STOCK_0056_LUBRICANTES from '../../../assets/data/stock_histories_0056_lubricantes.json'
import STOCK_0056_TIENDAS from '../../../assets/data/stock_histories_0056_tiendas-cr.json'
import STOCK_0599_FILTROS from '../../../assets/data/stock_histories_0599_filtros.json'
import STOCK_0599_LUBRICANTES from '../../../assets/data/stock_histories_0599_lubricantes.json'
import STOCK_0599_TIENDAS from '../../../assets/data/stock_histories_0599_tiendas-cr.json'
import STOCK_1132_FILTROS from '../../../assets/data/stock_histories_1132_filtros.json'
import STOCK_1132_TIENDAS from '../../../assets/data/stock_histories_1132_tiendas-cr.json'
import STOCK_1132_LUBRICANTES from '../../../assets/data/stock_histories_1132_lubricantes.json'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public store = [{
    id: "0056",
    storeData: STOCK_0056_TIENDAS,
    lubeData: STOCK_0056_LUBRICANTES,
    filterData: STOCK_0056_FILTROS
  },
  {
    id: "0599",
    storeData: STOCK_0599_TIENDAS,
    lubeData: STOCK_0599_LUBRICANTES,
    filterData: STOCK_0599_FILTROS
  }, 
  {
    id: "1132",
    storeData: STOCK_1132_TIENDAS,
    lubeData: STOCK_1132_LUBRICANTES,
    filterData: STOCK_1132_FILTROS
  }]
  
  constructor() { }
}
