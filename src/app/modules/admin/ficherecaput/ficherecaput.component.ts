import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Gam } from 'src/app/models/gam.model';
import { GamService} from 'src/app/services/gam.service';

@Component({
  selector: 'app-ficherecaput',
  templateUrl: './ficherecaput.component.html',
  styleUrls: ['./ficherecaput.component.scss']
})
export class FicherecaputComponent implements OnInit {

  form!:FormGroup;
  gam: Gam= new Gam();
  var_natureinfo!: String;
  var_supparution!: String;
  var_percepsupparution!: String;
  var_rebondinfo!: String;

  constructor( public gamService: GamService,
    private fb: FormBuilder,
    private router: Router) 
  {}


  ngOnInit(){
    this.var_natureinfo= new String(localStorage.getItem('tokenNATUREINFO'));
    this.var_supparution= new String(localStorage.getItem('tokenSUPPORTPARUTION'));
    this.var_percepsupparution= new String(localStorage.getItem('tokenPERCEPTIONSUPPORTPARUTION'));
    this.var_rebondinfo= new String(localStorage.getItem('tokenREBONDINFO'));
    
    this.form = this.fb.group({
      natureinfo: [this.var_natureinfo ],
      supportparution: [this.var_supparution],
      perceptiosupparution: [ this.var_percepsupparution],
      rebondinfo:[ this.var_rebondinfo]
      
      
    })
    }
    addGam(){
      this.gam=this.form.value;
      this.gamService.addGam(this.gam).subscribe(
        data=>{
          console.log("********************",data)
          this.router.navigate(["/"])
        }
      )

    }


}
