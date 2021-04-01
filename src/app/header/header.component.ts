import { Component, OnInit } from '@angular/core';
import {YourLoginName} from '../Fadhlmi';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = "Mishaal";
  assignment_title = "Assignment3";

  constructor() { }

  ngOnInit(): void {
  }

}
