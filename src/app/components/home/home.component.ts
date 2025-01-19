import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  usersInfo:any[]=[];
  constructor(private userService:UserService){}
  getUser(){
    this.userService.getUsers().subscribe((data)=>{
      this.usersInfo=data.results;
      console.log(data);
    })
  }
  ngOnInit(): void {
    this.getUser();
  }
}
