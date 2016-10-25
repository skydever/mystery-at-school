import { Component, HostBinding, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
// import 'rxjs/add/operator/map';

import { Animations } from '../../shared/animations/animations';
import { Mystery } from '../data-structures/mystery';

@Component({
  selector: 'app-create-mystery',
  templateUrl: './create-mystery.component.html',
  styleUrls: ['./create-mystery.component.scss'],
  animations: [Animations.routeAnimation]
})
export class CreateMysteryComponent implements OnInit {

  // dev(train): animation on route transitions
  @HostBinding('@routeAnimation') routeAnimation = 'true';

  storyRowsDefault: number = 5;

  mysteryKey: string;
  mysteryToEdit: Mystery;

  storyRows: number;

  mysteries: FirebaseListObservable<Mystery[]>;
  categories: string[];

  constructor(af: AngularFire) {
    if (af !== null) { // dev(clean): TODO check how to unit test with angularfire2!!
      this.mysteries = af.database.list('mysteries', {
        query: {
          limitToLast: 10,
          orderByKey: true
        }
      });
      // obtain distinct categories
    }
  }

  ngOnInit() {
    this.initMysteryToEdit();
  }

  initMysteryToEdit(): void {
    this.mysteryToEdit = new Mystery();
    this.mysteryKey = undefined;
    this.storyRows = this.storyRowsDefault;
  }

  getMysteryClone(mystery: Mystery): Mystery {
    return Object.assign({}, new Mystery(), {
      title: mystery.title,
      category: mystery.category,
      story: mystery.story
    });
  }

  onStoryChange() {
    if (this.mysteryToEdit.story) {
      let rows = this.mysteryToEdit.story.split(/\r\n|\r|\n/).length + 1;
      this.storyRows = rows > this.storyRowsDefault ? rows : this.storyRowsDefault;
    } else {
      this.storyRows = this.storyRowsDefault;
    }
  }

  saveItem(mystery: Mystery) {
    // console.log(mystery);
    if (this.mysteryKey) {
      // console.log(`update: ${this.mysteryKey}`);
      this.mysteries.update(this.mysteryKey, this.getMysteryClone(mystery));
    } else {
      // console.log(`new`);
      this.mysteries.push(mystery);
    }
    this.initMysteryToEdit();
  }

  editItem(mystery: Mystery, key: string) {
    this.mysteryToEdit = this.getMysteryClone(mystery);
    this.mysteryKey = key;
  }

  // deleteItem(key: string) {
  //   this.mysteries.remove(key);
  // }
  // deleteEverything() {
  //   this.mysteries.remove();
  // }

}
