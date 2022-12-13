import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { FormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CranePart } from './cranePart';
import { CranePartService } from './cranePart.service';

@Component({
  selector: 'app-sccontrolltable',
  standalone: true,
  templateUrl: './sccontrolltable.component.html',
  styleUrls: ['./sccontrolltable.component.css'],
  imports: [
    NgFor,
    DecimalPipe,
    FormsModule,
    AsyncPipe,
    NgbTypeaheadModule,
    NgbdSortableHeader,
    NgbPaginationModule,
    NgIf,
  ],
  providers: [CranePartService, DecimalPipe],
})
export class SccontrolltableComponent {
  craneParts$: Observable<CranePart[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: CranePartService) {
    this.craneParts$ = service.craneParts$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
