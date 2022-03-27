import { Component, OnInit,HostListener } from '@angular/core'
import * as Aos from 'aos';
import * as $ from 'jquery';

@HostListener('window:scroll',['$event'])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AbuDeveloper';

  home="assets/home1.png"
  primage = "assets/Spinner-5.gif"
  ngOnInit():any{
      Aos.init();  
      
      let pre = document.getElementById('preloader');
      window.addEventListener("load",function(){
        pre!.style.display="none";
      })

  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('scrolled');
    } else {
      element.classList.remove('scrolled');
    }
  }

  toHome()
  {
    document.getElementById("Home")?.scrollIntoView({behavior:"smooth"})
  }
  toAbout()
  {
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"})
  }
  toSkills()
  {
    document.getElementById("skills")?.scrollIntoView({behavior:"smooth"})
  }
  toContact()
  {
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})
  }


}
