import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Mystery } from '../data-structures/mystery';

@Component({
  selector: 'app-create-mystery',
  templateUrl: './create-mystery.component.html',
  styleUrls: ['./create-mystery.component.scss']
})
export class CreateMysteryComponent implements OnInit {

  newMystery: Mystery;
  mysteries: FirebaseListObservable<Mystery[]>;

  constructor(af: AngularFire) {
    if (af !== null) { // dev(clean): TODO check how to unit test with angularfire2!!
      // just create a new one - later show the list of existing mysteries at the bottom for edit
      this.mysteries = af.database.list('mysteries', {
        query: {
          limitToLast: 10,
          orderByKey: true
        }
      });
    }
  }

  ngOnInit() {
    this.newMystery = new Mystery();
  }

  addItem(newMystery: Mystery) {
    console.log(newMystery);
    this.mysteries.push(newMystery);
  }
  updateItem(key: string, newText: string) {
    this.mysteries.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.mysteries.remove(key);
  }
  deleteEverything() {
    this.mysteries.remove();
  }

}
