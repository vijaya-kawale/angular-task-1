import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor() { }
  
  ngOnInit(): void {
  //   this.form = new FormGroup({
  //     email: new FormControl(''),
  //     phone: new FormControl(''),
  //     selectedOption: new FormControl(''),
  //     firstName: new FormControl(''),
  //     lastName: new FormControl('')
  //  })
  }
}

