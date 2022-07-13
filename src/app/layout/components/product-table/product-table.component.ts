import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  displayedColumns: string[] = ['date', 'store', 'quantity', 'code'];
  @Input() dataSource = [];

  constructor() { }

  ngOnInit(): void {
  }

}
