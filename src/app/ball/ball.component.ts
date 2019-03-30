import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(-50vw)' }),
        animate('500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('0.3s', style({ transform: 'translateX(50vw)' }))
      ])
    ]),
  ]
})
export class BallComponent implements OnInit {

  IN = true;

  constructor() { }

  ngOnInit() {
  }

  addMe(){
    this.IN = true;
  }

  removeMe(){
    this.IN = false;
  }

}
