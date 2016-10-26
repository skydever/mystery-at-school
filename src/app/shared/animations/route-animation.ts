import { animate, state, style, trigger, transition } from '@angular/core';

export class RouteAnimation {

    static scaleRouteAnimation = trigger('routeAnimation', [
        state('*', style({ transform: 'translateX(0)', opacity: 1 })),
        transition('void => *', [
            style({
                transform: 'scale(0.1)',
                opacity: 0,
                position: 'absolute',
                display: 'block'
            }),
            animate('0.3s ease-in')
        ]),
        transition('* => void', [
            style({
                position: 'absolute',
                display: 'block'
            }),
            animate('0.2s ease-out', style({
                transform: 'scale(0.1)',
                opacity: 0
            }))
        ])
    ]);

    static translatexRouteAnimation = trigger('routeAnimation', [
        state('*', style({ transform: 'translateX(0)', opacity: 1 })),
        transition('void => *', [
            style({
                transform: 'translateX(-100%)',
                opacity: 0,
                position: 'absolute',
                display: 'block',
                width: '100%'
            }),
            animate('0.3s ease-in')
        ]),
        transition('* => void', [
            style({
                position: 'absolute',
                display: 'block',
                width: '100%'
            }),
            animate('0.2s ease-out', style({
                transform: 'translateX(100%)',
                opacity: 0
            }))
        ])
    ]);

    // dev(train): set the route animation
    //             IMPORTANT: at the bottom of the class, the animation has to be defined first! JS
    // static routeAnimation = Animations.scaleRouteAnimation;
    static routeAnimation = RouteAnimation.translatexRouteAnimation;

}
