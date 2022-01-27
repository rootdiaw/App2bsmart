import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-supprotparution',
  templateUrl: './new-supprotparution.component.html',
  styleUrls: ['./new-supprotparution.component.scss']
})
export class NewSupprotparutionComponent implements OnInit {

  message!:String;
  var_suportparution!: String;
  tsuppar!:String;
  secondFormGroup!: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder ,public router: Router) {}

  ngOnInit() {
    this.tsuppar= new String(localStorage.getItem('tokenSUPPORTPARUTION'));
    this.secondFormGroup = this._formBuilder.group({
      supportparution: [this.tsuppar, Validators.required],
    });
  }
  newsupportparution(){
    this.var_suportparution=this.secondFormGroup.get("supportparution")?.value;
    let tokenSUP: any
    if(this.var_suportparution.length!=0){
      console.log("zertyui",this.var_suportparution)
      tokenSUP=this.var_suportparution
      localStorage.setItem('tokenSUPPORTPARUTION', tokenSUP); 
      this.router.navigate(['/newperceptionsupportparution']);
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }


}
