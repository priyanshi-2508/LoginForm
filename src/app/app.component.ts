import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-app';

  isChange = false;
  
  onChange(item:boolean){
    this.isChange = true;
  }

}
