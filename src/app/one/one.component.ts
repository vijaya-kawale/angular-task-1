import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  form:FormGroup | any

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      LastName:new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      contactMethod:new FormControl('')
    })
  }
  
}
