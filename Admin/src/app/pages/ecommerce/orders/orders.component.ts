import { Component, OnInit, ViewChildren, QueryList, NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Order } from './orders.model';
import { ordersData } from './data';

import { OrderSortableDirective, SortEvent } from './orders-sortable.directive';
import { OrderService } from './orders.service';
import { Answer } from 'src/app/models/answer';
import { AnswersService } from 'src/app/services/answers.service';
import { AnswersDto } from 'src/app/models/answersDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [OrderService, DecimalPipe]

})


export class OrdersComponent implements OnInit {

  @ViewChildren(OrderSortableDirective) headers: QueryList<OrderSortableDirective>;

  // breadcrumb items
  breadCrumbItems: Array<{}>;

  // Table data
  ordersData: Order[];
  filterAnswer: ""

  tables$: Observable<Order[]>;
  total$: Observable<number>;
  answersDto: AnswersDto[] = [];

  constructor(public service: OrderService,
    private answerService: AnswersService,
    private router: Router) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;

  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Orders', active: true }];

    /**
     * fetch data
     */
    this._fetchData();
    this.getAnswersDetail();
  }

  routers() {
    this.router.navigate['ecommerce/answers/answersDetail/:id']
    console.log("test")
  }
  getAnswersDetail() {
    this.answerService.getAllByOne().subscribe((response => {
      this.answersDto = response.data;
      console.log(response)
    }))
  }
  /**
   * fetches the table value
   */
  _fetchData() {
    this.ordersData = ordersData;
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
