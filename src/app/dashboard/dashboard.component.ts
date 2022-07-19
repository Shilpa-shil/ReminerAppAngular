import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  eventForm = this.fb.group({
    date: ['',[Validators.required]],
    event: ['',[Validators.required]]
  })

  user:any
  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) { 
    this.user = localStorage.getItem('currentUser')
  }

  ngOnInit(): void {
    if(!localStorage.getItem("currentUserid"))
    {
      alert("pls login")
      this.router.navigateByUrl("")
    }
  }

  addEvent() {
    var date = this.eventForm.value.date
    var event = this.eventForm.value.event

    console.log(date);
    console.log(event);

    if(this.eventForm.valid)
    {
    this.ds.addEvent(date, event)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
          this.router.navigateByUrl('event')
        }
      },
        result => {
          alert(result.error.message)
        })
  }
  else{
    alert("invalid form")
  }
  }
  logout() {
    localStorage.removeItem("currentUserid")
    localStorage.removeItem("currentUsername")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }

}
