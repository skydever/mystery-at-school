import { animate, state, style, trigger, transition } from '@angular/core';

export class ListItemAnimation {

    static scaleListItemAnimation = trigger('listItemAnimation', [
        state('*', style({ transform: 'translateX(0)', opacity: 1 })),
        transition('void => *', [
            style({
                transform: 'scale(0.1)',
                opacity: 0
            }),
            animate('0.3s ease-in')
        ]),
        transition('* => void', [
            animate('0.2s ease-out', style({
                transform: 'scale(0.1)',
                opacity: 0
            }))
        ])
    ]);

    static translatexListItemAnimation = trigger('listItemAnimation', [
        state('*', style({ transform: 'translateX(0)', opacity: 1 })),
        transition('void => *', [
            style({
                transform: 'translateX(-300px)',
                opacity: 0
            }),
            animate('0.3s ease-in')
        ]),
        transition('* => void', [
            animate('0.2s ease-out', style({
                transform: 'translateX(100%)',
                opacity: 0
            }))
        ])
    ]);

    // static listItemAnimation = ListItemAnimation.translatexListItemAnimation;
    static listItemAnimation = ListItemAnimation.scaleListItemAnimation;

}
