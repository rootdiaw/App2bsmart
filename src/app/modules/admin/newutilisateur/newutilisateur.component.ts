import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newutilisateur',
  templateUrl: './newutilisateur.component.html',
  styleUrls: ['./newutilisateur.component.scss']
})
export class NewutilisateurComponent implements OnInit {
  message!:String;
  var_natureinfo!: String;
  tnatinfo!:String;
  firstFormGroup!: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder,private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tnatinfo= new String(localStorage.getItem('tokenNATUREINFO'));
   
    this.firstFormGroup = this._formBuilder.group({
 
        natureinfo: [this.tnatinfo, Validators.required],
        
    });
  }

  newnatureinfo(){
    this.var_natureinfo=this.firstFormGroup.get("natureinfo")?.value;
    let tokenN: any
    if(this.var_natureinfo.length!=0){
      console.log("zertyui",this.var_natureinfo)
      tokenN=this.var_natureinfo
      localStorage.setItem('tokenNATUREINFO', tokenN); 
      this.router.navigate(['/newsupportparution']);
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }

  }
}
