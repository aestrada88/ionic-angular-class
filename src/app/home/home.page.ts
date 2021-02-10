import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  defaultText = 'This is the starting text';

  onChangeText(){
    if(this.defaultText === 'This is the starting text'){
    this.defaultText = 'Changed Text!!';
    }else{
      this.defaultText = 'This is the starting text';
    }

  }

  constructor() {}

}
