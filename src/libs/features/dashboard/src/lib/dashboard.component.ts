import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { dashboard } from './store/dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  vm$!: Observable<ReturnType<typeof dashboard>>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.vm$ = this.store.pipe(select(dashboard));
  }
}
