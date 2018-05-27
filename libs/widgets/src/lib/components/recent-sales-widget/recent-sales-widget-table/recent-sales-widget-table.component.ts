import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  MatDialog,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../list/list-column.model';

@Component({
  selector: 'ngx-recent-sales-widget-table',
  templateUrl: './recent-sales-widget-table.component.html',
  styleUrls: ['./recent-sales-widget-table.component.scss']
})
export class RecentSalesWidgetTableComponent implements OnInit, AfterViewInit {
  @Input() columns: ListColumn[];
  @Input() pageSize = 10;
  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  data$: Observable<any[]> = this.subject$.asObservable();
  dataSource: MatTableDataSource<any> | null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog) {}

  @Input()
  set data(value: any[]) {
    this.subject$.next(value);
  }

  get visibleColumns() {
    return this.columns
      .filter(column => column.visible)
      .map(column => column.property);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();

    this.data$
      .pipe(filter(Boolean))
      .subscribe(values => (this.dataSource.data = values));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
