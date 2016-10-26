import { Component, HostBinding, OnInit } from '@angular/core';

import { RouteAnimation } from '../../shared/animations/route-animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [RouteAnimation.routeAnimation]
})
export class HomeComponent implements OnInit {

  // dev(train): animation on route transitions
  @HostBinding('@routeAnimation') routeAnimation = 'true';

  constructor() { }

  ngOnInit() { }

}
