import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    if (af !== null) { // dev(clean): TODO check how to unit test with angularfire2!!
      this.items = af.database.list('mysteries', {
        query: {
          limitToLast: 10,
          orderByKey: true
        }
      });
    }
  }

  ngOnInit() {
  }

  addItem(newName: string) {
    this.items.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.items.remove(key);
  }
  deleteEverything() {
    this.items.remove();
  }

}
