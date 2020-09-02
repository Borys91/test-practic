import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../shared/get-info.service'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {
  userList;
  constructor(
    private getInfo:GetInfoService,
    private router :Router,
    private activatedRoute:ActivatedRoute
    ){ }
    name;
    
    show(e){
      this.name=e
      this.getInfo.getId()
      this.router.navigate([e],{relativeTo:this.activatedRoute})
      
    }
 

  ngOnInit(): void {
    this.userList=this.getInfo.authorsList
    
  }

}
