import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string,
  age:number
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile

  constructor() {
    this.profile = {
      studentid: 'B6004408',
      name: 'Peerametha Naradul',
      gender: 'Male',
      birthyear: 1998,
      age: null,
      email: 'b6004408@g.sut.ac.th',
      phone: '0942943822',
      img: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
      address: '68 nhongwha bua lai, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
    this.profile = this.profile;
    this.profile.age = 2020-this.profile.birthyear;
  }
  onUserClick($e){
    alert(this.profile.address);
  }

  getUrl(){
    return this.profile.img;
  }

}
