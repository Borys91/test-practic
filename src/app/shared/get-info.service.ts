import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {
  authorsList = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "data": "26 мая 1799 г",
      "books": [
        { name: "книга1", numberOfPages: 100, genre: "Деловая литература" },
        { name: "книга2", numberOfPages: 120, genre: "Детективы и Триллеры" },
        { name: "книга3", numberOfPages: 130, genre: "Искусство" },
        { name: "книга4", numberOfPages: 140, genre: "Компьютеры и Интернет" }
      ],
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "books": [
        { name: "книга5", numberOfPages: 100, genre: "Деловая литература" },
        { name: "книга6", numberOfPages: 120, genre: "Детективы и Триллеры" },
        { name: "книга7", numberOfPages: 130, genre: "Искусство" },
        { name: "книга8", numberOfPages: 140, genre: "Компьютеры и Интернет" }
      ],
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "books": [
        { name: "книга9", numberOfPages: 100, genre: "Деловая литература" },
        { name: "книга10", numberOfPages: 120, genre: "Детективы и Триллеры" },
        { name: "книга11", numberOfPages: 130, genre: "Искусство" },
        { name: "книга12", numberOfPages: 140, genre: "Компьютеры и Интернет" }
      ],
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "books": [
        { id: "1", name: "книга13", numberOfPages: 100, genre: "Деловая литература" },
        { id: "2", name: "книга14", numberOfPages: 120, genre: "Детективы и Триллеры" },
        { id: "3", name: "книга15", numberOfPages: 130, genre: "Искусство" },
        { id: "4", name: "книга16", numberOfPages: 140, genre: "Компьютеры и Интернет" }
      ],
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]
  book=[]
  constructor() { }


  getId(){
    this.authorsList.forEach(item=>{
      // console.log(item)
      this.book.push(item.books)
     
      
    })
   

    
  }

}

