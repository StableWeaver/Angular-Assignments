import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public buttonname='Click!';
  public  fun()                       //Question no 3. Assignment 3
  {
    return "Inside the fun function";
  }
  
  public name='Marvellous';           //Question no 4.

  public clickevent()
  {
    this.buttonname='Button clicked!';
  }
}
