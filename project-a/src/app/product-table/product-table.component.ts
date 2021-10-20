import { Component } from '@angular/core';
// import { AfterViewInit, ViewChild } from '@angular/core';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';

export interface ProductTable {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
}

const ELEMENT_DATA: ProductTable[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    photo:
      'https://www.egnetas.lt/wp-content/uploads/2021/09/Apple-iPhone-13-Pro-Max-Silver-ismanusis-telefonas.jpg',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    photo:
      'https://www.varle.lt/static/uploads/products/26/app/apple-iphone-13-512gb-rozine.jpg',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    photo:
      'https://www.varle.lt/static/uploads/products/28/app/apple-iphone-13-128gb-blue.jpg',
  },
];

@Component({
  selector: 'app-products',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent {
  title = 'project-a';
  displayedColumns: string[] = ['id', 'name', 'price', 'description', 'photo'];
  dataSource = ELEMENT_DATA;

  // @ViewChild(MatSort) sort: MatSort;

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }
}
