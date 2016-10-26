import { Component, Input, OnInit } from '@angular/core';

import { Question } from '../../data-structures/question';
import { ListItemAnimation } from '../../animations/list-item-animation';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.scss'],
  animations: [ListItemAnimation.listItemAnimation]
})
export class QuestionEditComponent implements OnInit {

  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

}
