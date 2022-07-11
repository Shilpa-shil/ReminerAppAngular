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

  eventForm=this.fb.group({
    date : [''],
    event : ['']
  })

  
  constructor(private ds:DataService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

 addEvent(){
  var date=this.eventForm.value.date
  var event=this.eventForm.value.event

  console.log(date);
  console.log(event);
  
  this.ds.addEvent(date,event)
  .subscribe((result:any)=>{
    if(result){
      alert(result.message)
      this.router.navigateByUrl('event')
    }
  },
  result=>{
    alert(result.error.message)
  })
 } 
}
