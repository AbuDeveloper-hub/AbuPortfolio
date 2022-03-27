import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  
  userfrm!: FormGroup;
  ngOnInit(): void {
    this.userfrm = new FormGroup({
      'name' : new FormControl(null),
      'email' : new FormControl(null),
      'desc' : new FormControl(null)
    })
  }
  Clearform(){
    this.userfrm.reset();
  }

}
