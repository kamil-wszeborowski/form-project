import { Validator, AbstractControl, NG_VALIDATORS, NgControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[enabledControl]'
  })
  export class EnabledControlDirective {
  
      @Input() set enabledControl(condition: boolean) {
          if (this.ngControl) {
              if (this.ngControl.control) {
                  if (condition)
                      this.ngControl.control.enable();
                  else
                      this.ngControl.control.disable();
              }
          }
    }
    constructor(private ngControl : NgControl ) {
    }
  }