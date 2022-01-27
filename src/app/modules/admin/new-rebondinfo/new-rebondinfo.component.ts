import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FicherecaputComponent } from '../ficherecaput/ficherecaput.component';

@Component({
  selector: 'app-new-rebondinfo',
  templateUrl: './new-rebondinfo.component.html',
  styleUrls: ['./new-rebondinfo.component.scss']
})
export class NewRebondinfoComponent implements OnInit {

  message!:String;
  var_rebondinfo!: String;
  trebondinfo!:String;
  fourFormGroup!: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder ,public router: Router,public dialog: MatDialog) {}

  ngOnInit() {
    this.trebondinfo= new String(localStorage.getItem('tokenREBONDINFO'));
    this.fourFormGroup = this._formBuilder.group({
      rebondinfo: [this.trebondinfo, Validators.required],
    });
  }
 
newrebondinfo(){
  this.var_rebondinfo=this.fourFormGroup.get("rebondinfo")?.value;
    let tokenR: any
    if(this.var_rebondinfo.length!=0){
      console.log("zertyui",this.var_rebondinfo)
      tokenR=this.var_rebondinfo
      localStorage.setItem('tokenREBONDINFO', tokenR); 
     
    const dialogRef = this.dialog.open(FicherecaputComponent,
      {
        width: '23%',
        height: '67%',
        data: {

        },}
      );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }
  




}
