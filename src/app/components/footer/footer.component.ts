import { Component, OnInit, Input } from '@angular/core';
import { FilterButton, Filter } from '../../models/filtering.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() length: number;

  filterButtons: FilterButton[] = [
    { type: Filter.All, label: 'All', isActive: true },
    { type: Filter.Active, label: 'Active', isActive: false },
    { type: Filter.Completed, label: 'Completed', isActive: false }
  ]

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  
  onclickFilter(type: Filter) {
    this.todoService.filterTodos(type, true);
  }
}
