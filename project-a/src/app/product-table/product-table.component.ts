import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements AfterViewInit {
  title = 'project-a';
  displayedColumns: string[] = ['id', 'photo', 'name', 'description', 'price'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
