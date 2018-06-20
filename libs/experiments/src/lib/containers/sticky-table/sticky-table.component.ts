import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'ngx-sticky-table',
  templateUrl: './sticky-table.component.html',
  styleUrls: ['./sticky-table.component.scss']
})
export class StickyTableComponent implements AfterViewInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol','test','test1','test2','test3','test4','test5','test6','test7','test8'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  test:string;
  test1:string;
  test2:string;
  test3:string;
  test4:string;
  test5:string;
  test6:string;
  test7:string;
  test8:string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl',test:'test',test1:'test1',test2:'text2',test3:'text3',test4:'text4',test5:'text5',test6:'text6',test7:'text7',test8:'text8'}
];


/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
