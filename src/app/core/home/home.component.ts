import { Component, HostBinding, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Animations } from '../../shared/animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [Animations.routeAnimation]
})
export class HomeComponent implements OnInit {

  // dev(train): animation on route transitions
  @HostBinding('@routeAnimation') routeAnimation = 'true';

  constructor() { }

  ngOnInit() { }

}
