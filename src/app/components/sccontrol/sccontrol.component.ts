import { Component } from '@angular/core';
import { SccontrolltableComponent } from '../sccontrolltable/sccontrolltable.component';

@Component({
  selector: 'app-sccontrol',
  templateUrl: './sccontrol.component.html',
  styleUrls: ['./sccontrol.component.css'],
  standalone: true,
  imports: [SccontrolltableComponent],
})
export class SCcontrolComponent {
  constructor() {}
}
