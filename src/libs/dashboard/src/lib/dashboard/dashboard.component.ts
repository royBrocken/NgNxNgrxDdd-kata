import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Dashboard } from '@spacenews-api';
import { Observable } from 'rxjs';
// import { dashboard } from './dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  // dashboard$!: Observable<ReturnType<typeof dashboard>>;

  constructor(private store: Store) {}

  ngOnInit(): void {
      // this.dashboard$ = this.store.pipe(select(dashboard));
  }
}
