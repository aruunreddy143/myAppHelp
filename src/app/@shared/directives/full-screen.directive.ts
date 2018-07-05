import { Directive, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';
@Directive({
  selector: '[appFullScreen]'
})
export class FullScreenDirective {

  constructor() {
  }

  @HostListener('click') onclick() {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }

}
