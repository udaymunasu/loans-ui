import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideInFromRightAnimation = trigger('slideInFromRight', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('0.5s ease', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('0.5s ease', style({ transform: 'translateX(-100%)' })),
  ]),
]);



export const routeAnimations = trigger('routeAnimations', [
  transition('customerPage <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ transform: 'translateX(100%)' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('500ms ease-out', style({ transform: 'translateX(-100%)' }))
      ]),
      query(':enter', [
        animate('500ms ease-out', style({ transform: 'translateX(0)' }))
      ])
    ]),
    query(':enter', animateChild())
  ])
]);
