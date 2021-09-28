import { Component, OnInit } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

import { tasks } from './data';

import { Task } from './kanban.model';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  completedTasks: Task[];
  inprogressTasks: Task[];
  todoTasks: Task[];

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Nazox' }, { label: 'Kanban Board', active: true }];

    this._fetchData();
  }


  /**
   * on dragging task
   * @param item item dragged
   * @param list list from item dragged
   */
  onDragged(item: any, list: any[]) {
    const index = list.indexOf(item);
    list.splice(index, 1);
  }

  /**
   * On task drop event
   */
  onDrop(event: DndDropEvent, filteredList?: any[], targetStatus?: string) {
    if (filteredList && event.dropEffect === 'move') {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = filteredList.length;
      }

      filteredList.splice(index, 0, event.data);
    }
  }

  private _fetchData() {
    // all tasks
    this.inprogressTasks = tasks.filter(t => t.status === 'inprogress');
    this.completedTasks = tasks.filter(t => t.status === 'completed');
    this.todoTasks = tasks.filter(t => t.status === 'todo');
  }

}
