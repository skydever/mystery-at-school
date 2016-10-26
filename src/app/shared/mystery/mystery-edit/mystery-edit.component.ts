import { Component, Input, OnInit } from '@angular/core';

import { Mystery } from '../../data-structures/mystery';

@Component({
  selector: 'app-mystery-edit',
  templateUrl: './mystery-edit.component.html',
  styleUrls: ['./mystery-edit.component.scss']
})
export class MysteryEditComponent implements OnInit {

  private _mystery: Mystery;

  storyRowsDefault: number = 5;
  storyRows: number;

  constructor() { }

  @Input() set mystery(mystery: Mystery) {
    this._mystery = mystery;
    this._updateStoryRows();
  }

  get mystery(): Mystery {
    return this._mystery;
  }

  private _setStoryRows() {
    let rows = this.mystery.story.split(/\r\n|\r|\n/).length + 1;
    this.storyRows = rows > this.storyRowsDefault ? rows : this.storyRowsDefault;
  }

  private _updateStoryRows() {
    if (this.mystery && this.mystery.story) {
      this._setStoryRows();
    } else {
      this.storyRows = this.storyRowsDefault;
    }
  }

  ngOnInit() {
  }

  onStoryChange() {
    this._updateStoryRows();
  }

}
