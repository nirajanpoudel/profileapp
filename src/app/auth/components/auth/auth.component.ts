import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  errorMessage:any;
  public authForm: FormGroup;
  
  constructor(private fb: FormBuilder,
    private authService:AuthService,
    private tokenSevice:TokenService,
    private router:Router
    ) { 
      this.authForm = this.fb.group({
        email: [null, Validators.compose([Validators.required])],
        password: [null, Validators.compose([Validators.required])]
      });
    }

  ngOnInit(): void {
  }
  login():void{
    this.authService.login(this.authForm.value).subscribe(
      data=>{
      this.tokenSevice.set(data.access_token);
      this.router.navigate(['/profile']);
    },error=>{
      console.warn(error)
      this.errorMessage = error.error.error;
    })
  }
  

}
