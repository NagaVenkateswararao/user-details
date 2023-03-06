import { OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser  } from '@fortawesome/free-solid-svg-icons';
import { DialogBoxComponent } from 'app/dialog-box/dialog-box.component';
import data from 'assets/data.json';


@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent implements OnInit{
  @ViewChild(DialogBoxComponent, { static: true }) child: any;


  film=faGraduationCap;
mortar=faEnvelope;
userimage=faUser;
  incomingdata: any=[];
constructor(public dialog: MatDialog) {
  
}
  

  ngOnInit() {
    this.incomingdata = this.child.final;
    console.log(this.incomingdata)
  }

openDialog() {
  const dialogRef = this.dialog.open(DialogBoxComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

}
