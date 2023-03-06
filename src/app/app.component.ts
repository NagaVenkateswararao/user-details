import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUser  } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH  } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


 
import data from '../assets/data.json';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Legacy Life Plans';
  searchicon=faSearch
  mailicon=faEnvelope;
more=faEllipsisH;
home=faHome;
users=faUsers;
userimage=faUser;
  constructor(public dialog: MatDialog) {
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogBoxComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

}

