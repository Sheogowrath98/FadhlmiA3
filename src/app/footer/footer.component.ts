import { Component, OnInit } from '@angular/core';
import {YourLoginName} from '../Fadhlmi';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  name = "Mishaal Fadhl";
  login_name = "Fadhlmi";
  campus = "SheridanCollege";
  number = 991454815;
  assignment_title = "Assignment3";

  constructor() { }

  ngOnInit(): void {
  }

}
