import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }
  

  //Register
  register(username: any, userid: any, password: any) {
    const data = {
      username, userid, password
    }
    return this.http.post('http://localhost:3000/register', data)

  }

  //Login
  login(userid: any, password: any) {
    const data = {
      userid, password
    }
    return this.http.post('http://localhost:3000/login', data)
  }

  //addEvent
  addEvent(date: any, event: any) {
    const data = {
      date, event
    }
    return this.http.post('http://localhost:3000/addEvent', data, this.getOptions())
  }

  getOptions() {
    const token = localStorage.getItem('token')
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.append('reminder-token', token)
      options.headers = headers
    }
    return options
  }

  //getEvent
  getEvent(currentUserid: any) {
    const data = {
      currentUserid
    }
    return this.http.post('http://localhost:3000/getEvent', data, this.getOptions())
  }

  //remove event
  removeEvent(k:any){
    const data={
      k
    }
    return this.http.post('http://localhost:3000/removeEvent', data, this.getOptions())
  }
}
