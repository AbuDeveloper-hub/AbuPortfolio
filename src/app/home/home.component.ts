import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import Typed from 'typed.js';

import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  about:AboutComponent = new AboutComponent();
  constructor(private router:Router) { }

  image:String = "assets/home1.png" 
  img1 ="assets/wave (1).svg"
  vid = "assets/bv.mp4"

  ngOnInit(): void {
    Aos.init()
    var typed = new Typed('.element', {
      strings: ['I am a Front-End Developer.', 'I am a Java Developer.'],
      typeSpeed:20,
      backSpeed:20,
      loop: true,
      loopCount: Infinity,
      smartBackspace: true // Default value
    });
    
    

  }


  
}
