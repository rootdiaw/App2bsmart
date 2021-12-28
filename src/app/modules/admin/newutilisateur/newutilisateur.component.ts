import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlateformComponent } from '../plateform/plateform.component';

@Component({
  selector: 'app-newutilisateur',
  templateUrl: './newutilisateur.component.html',
  styleUrls: ['./newutilisateur.component.scss']
})
export class NewutilisateurComponent implements OnInit {
  firstFormGroup!: FormGroup;
  var_objectifmacrom!:String;

  constructor(private _formBuilder: FormBuilder,private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
 
        sexe: ['', Validators.required],
        age: ['', Validators.required],
        objectifmacrom: ['', Validators.required],
        plateform: ['', Validators.required],
        frequence: ['', Validators.required],
        contraintes: ['', Validators.required]
    });
  }

  genererPlateform(){
    this.var_objectifmacrom=this.firstFormGroup.get("objectifmacrom")?.value;
    console.log(this.firstFormGroup.get("objectifmacrom")?.value,"gener plateform objectmacrom",this.var_objectifmacrom)
    const dialogRef = this.dialog.open(PlateformComponent,
      {
        width: '80%',
        height: '90%',
        data: {var_objectifmacrom: this.var_objectifmacrom

        },}
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
