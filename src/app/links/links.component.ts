import { Component, Injectable, OnInit } from '@angular/core';
import { LinksService } from '../links.service';

export interface IResponse{
  link: string;
  views?: number
}
export interface IUserInfo{
  url: string;
  shorturl: string;
  views: number;
  session: string;
}
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  public url: string = '';
  public userInfo:IUserInfo[] = [];
  public urlToShorten: string = '';
  
  constructor(private linksService:LinksService) { }

  ngOnInit(): void {}
  async getLink(){
    const res:any = await this.linksService.getLink(this.urlToShorten)
    this.url = res.link
  }
  async getUserInfo(){
    const res:any = await this.linksService.getUserInfo() 
    console.log(res)
    this.userInfo = res
  }
}
