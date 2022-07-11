import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm=this.fb.group({
  username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  userid:['',[Validators.required,Validators.pattern('[0-9]*')]],
  password:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

  constructor(private fb:FormBuilder,private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }
register(){
  var username = this.registerForm.value.username
  var userid = this.registerForm.value.userid
  var password = this.registerForm.value.password

  if(this.registerForm.valid){
    this.ds.register(username,userid,password)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl('')
      }
    },
    result=>{
      alert(result.error.message)
    })
  }
  else{
    alert("invalid form")
  }
}
}
