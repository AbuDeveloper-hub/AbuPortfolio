import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  image:String = "assets/undraw_programming_re_kg9v.svg"
  ngOnInit(): void {
    Aos.init();
  }

}
