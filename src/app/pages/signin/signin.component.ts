import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private auth :AuthService,
    private router:Router,
    private toastr:ToastrService
  ) { }


  ngOnInit(): void {
  }
  onSubmit(f:NgForm){
    const {email,password} = f.form.value;
    //Todo do your checking here
    this.auth.signIn(email,password)
    .then((res)=>{
      this.router.navigateByUrl('/')
      this.toastr.success("SignIn success")
    })
    .catch((err)=>{
      console.log(err.message);
      this.toastr.error("SignIn failed")
    })


}
}