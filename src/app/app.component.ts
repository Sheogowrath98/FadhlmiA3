import { Component } from '@angular/core';
import {YourLoginName} from './Fadhlmi';
import {BOOKS} from "./MyBooks";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Bookss = BOOKS;
  title = 'Fadhlmi';
}
