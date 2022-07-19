import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  events : any
  currentUserid = localStorage.getItem('currentUserid')

  constructor(private ds:DataService) { 
    this.ds.getEvent(this.currentUserid)
    .subscribe((result:any)=>{
      console.log(result);
      this.events=result.event
      },
      result=>{
        alert(result.error.message)
      })
  }

  ngOnInit(): void {
  }

  removeEvent(k:any){
    this.ds.removeEvent(k)
    .subscribe((result:any)=>{
      if(result){
        window.location.reload();
      }
    },
    result=>{
      alert(result.error.message)
    })
  }
}
