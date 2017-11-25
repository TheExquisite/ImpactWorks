import { Component } from '@angular/core';
import { MdButtonModule, MdCardModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(){
    console.log("Website Author: James Clare");
    console.log("Iteration: 1.5.0");
  }
}