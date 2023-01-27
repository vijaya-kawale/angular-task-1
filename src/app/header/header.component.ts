import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OneComponent } from '../one/one.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    this.dialog.open(OneComponent, {
      width: '500px',
    });
  }

  ngOnInit(): void {

  }

}
