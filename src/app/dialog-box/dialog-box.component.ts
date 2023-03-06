import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  public userFormGroup!: FormGroup;
  actionBtn  :string ="save";
  errorMessage: any;


  constructor(private httpClient: HttpClient,@Inject(MAT_DIALOG_DATA) public editData:any,private dailogref:MatDialogRef<DialogBoxComponent>) { 

    
    
  }
  
 
  ngOnInit() {
    
    this.userFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      domain: new FormControl('', [Validators.required]),
      gendar: new FormControl('', [Validators.required]),
      datePicker: new FormControl('', [Validators.required]),
      number: new FormControl('+91', [Validators.required]),
      location: new FormControl('', [Validators.required, Validators.maxLength(200)])
    });
    
    this.httpClient.get<any>('assets/data.json').subscribe({
      next: data => {
        this.editData = data;
        console.log(this.editData);
        if(this.editData){
          this.actionBtn="update";
      
        }

        this.userFormGroup.controls['name'].setValue(this.editData[0].name);
        this.userFormGroup.controls['domain'].setValue(this.editData[0].domain);
        this.userFormGroup.controls['gendar'].setValue(this.editData[0].gendar);
        this.userFormGroup.controls['datePicker'].setValue(this.editData[0].datePicker);
        this.userFormGroup.controls['number'].setValue(this.editData[0].number);
        this.userFormGroup.controls['location'].setValue(this.editData[0].location);

      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })
    
  }

  public checkError = (controlName: string, errorName: string) => {
    // console.log(this.userFormGroup.controls);
    return this.userFormGroup.controls[controlName].hasError(errorName);
    console.log();

  }

  onSubmit(val: any) {
    console.log(val);

  }
  numbersonly(event: { key: string; }):boolean{
 let patt=/^([0-9])$/;
 let result=patt.test(event.key);
 return result;
  }

  getData() {
   
    this.httpClient.get<any>('assets/data.json').subscribe({
      next: data => {
        this.editData = data;
        console.log(this.editData);

      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })
  }
  update(){
    updatedValues:[];
    let namevalue=this.userFormGroup.controls['name'].value;
    let domainvalue=this.userFormGroup.controls['domain'].value;
    let gendervalue=this.userFormGroup.controls['gendar'].value;
    let dateofbirth=this.userFormGroup.controls['datePicker'].value;
    let phonenumber=this.userFormGroup.controls['number'].value;
    let location=this.userFormGroup.controls['location'].value;
    
  }

}
