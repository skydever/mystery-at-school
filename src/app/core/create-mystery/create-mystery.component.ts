import { Component, HostBinding, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
// import 'rxjs/add/operator/map';
import * as _ from 'lodash';

import { ListItemAnimation } from '../../shared/animations/list-item-animation';
import { Mystery } from '../../shared/data-structures/mystery';
import { Question } from '../../shared/data-structures/question';
import { RouteAnimation } from '../../shared/animations/route-animation';

@Component({
  selector: 'app-create-mystery',
  templateUrl: './create-mystery.component.html',
  styleUrls: ['./create-mystery.component.scss'],
  animations: [
    RouteAnimation.routeAnimation,
    ListItemAnimation.listItemAnimation
  ]
})
export class CreateMysteryComponent implements OnInit {

  // dev(train): animation on route transitions
  @HostBinding('@routeAnimation') routeAnimation = 'true';

  mysteryKey: string;
  mysteryToEdit: Mystery;

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
      // TODO obtain distinct categories
    }
  }

  ngOnInit() {
    this.initMysteryToEdit();
  }

  initMysteryToEdit(): void {
    this.mysteryToEdit = new Mystery();
    this.mysteryKey = undefined;
  }

  getMysteryClone(mystery: Mystery): Mystery {
    let clonedMystery = _.cloneDeep(mystery);
    // remove FireBase internals, just keep the clean Mystery
    clonedMystery = Object.assign({}, new Mystery(), {
      title: clonedMystery.title,
      category: clonedMystery.category,
      story: clonedMystery.story,
      questions: clonedMystery.questions
    });

    return clonedMystery;
  }

  saveItem(mystery: Mystery) {
    if (this.mysteryKey) {
      this.mysteries.update(this.mysteryKey, this.getMysteryClone(mystery));
    } else {
      this.mysteries.push(this.getMysteryClone(mystery));
    }
    this.initMysteryToEdit();
  }

  editItem(mystery: Mystery, key: string) {
    this.mysteryToEdit = this.getMysteryClone(mystery);
    this.mysteryKey = key;
  }

  addQuestion(mystery: Mystery) {
    if (!mystery.questions) {
      mystery.questions = [];
    }
    mystery.questions.push(new Question());
  }

  removeQuestion(mystery: Mystery, question: Question) {
    let idx = mystery.questions.indexOf(question);
    if (idx > -1) {
      mystery.questions.splice(idx, 1);
    }
  }

  // deleteItem(key: string) {
  //   this.mysteries.remove(key);
  // }
  // deleteEverything() {
  //   this.mysteries.remove();
  // }

}
