import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-perceptionsup',
  templateUrl: './new-perceptionsup.component.html',
  styleUrls: ['./new-perceptionsup.component.scss']
})
export class NewPerceptionsupComponent implements OnInit {

  message!:String;
  var_perceptionsuportparution!: String;
  tperceppsup!:String;
  threeFormGroup!: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder ,public router: Router) {}

  ngOnInit() {
    this.tperceppsup= new String(localStorage.getItem('tokenPERCEPTIONSUPPORTPARUTION'));
    this.threeFormGroup = this._formBuilder.group({
      perceptiosupparution: [this.tperceppsup, Validators.required],
    });
  }
  newperceptionsupportparution(){
    this.var_perceptionsuportparution=this.threeFormGroup.get("perceptiosupparution")?.value;
    let tokenPERCEPSUP: any
    if(this.var_perceptionsuportparution.length!=0){
      console.log("zertyui",this.var_perceptionsuportparution)
      tokenPERCEPSUP=this.var_perceptionsuportparution
      localStorage.setItem('tokenPERCEPTIONSUPPORTPARUTION', tokenPERCEPSUP); 
      this.router.navigate(['/newrebondinfo']);
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }


}
