import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetInfoService } from '../shared/get-info.service';



@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})

export class BooksListComponent implements OnInit  {
  books;
  constructor(
    private activatedRoute:ActivatedRoute,
    private getInfo:GetInfoService,
    private router:Router,
    
  ) { }

  ngOnInit(): void {
    
    
    this.activatedRoute.params.forEach(param=>{
        // console.log(param["name"])
        // console.log(this.getInfo.book)
      for(let j=0;j<this.getInfo.book.length;j++ ){
      //  console.log(this.getInfo.book[j]===undefined) 
        if(this.getInfo.book[j]!=undefined){
          for(let i=0 ; i<this.getInfo.book[j].length;i++){
            if(this.getInfo.book[j][i].name===param["name"]){
              // console.log(this.getInfo.book[j][i].name)
              // console.log(this.getInfo.book[j][i])
            //  this.books.push(this.getInfo.book[i])
               
                this.books= this.getInfo.book[j][i]
           }
          }
        }

      }
      
      
    })
  }
  goBack(){
    this.router.navigate(["../"],{relativeTo:this.activatedRoute})
  }
}
