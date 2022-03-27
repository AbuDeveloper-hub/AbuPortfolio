import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { CircleProgressComponent } from 'ng-circle-progress';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {


  
  constructor() { }
  img= "assets/undraw_javascript_frameworks_-8-qpc.svg";
  img1="assets/undraw_speech_to_text_re_rw02.svg";
  ngOnInit(): void {
    Aos.init();
    var lang = {
      "html": "80%",
      "css": "75%",
      "javascript": "70%",
      "bootstrap":"80%",
      "angular": "70%"
    };
    
    var multiply = 4;
    
    $.each( lang, function( language, pourcent) {
    
      var delay = 700;
      
      setTimeout(function() {
        $('#'+language+'-pourcent').html(pourcent);
      },delay*multiply);
      
      multiply++;
    
    });
  }

}
