import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConnachtUni-ui';

  getSomeValue(a,b){
    return a + b;
  }

  /**
   * 
   * @param this A number to multiply by that
   * @param that A number to multiply by this
   */
  multiply(this,that){
    return this * that;
  }
}
