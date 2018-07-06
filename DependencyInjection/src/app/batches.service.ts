import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchesService {

  constructor() { }

   sendData()
  {
    return [
      {"Name":"Ashish", "Year": 3, "Rno": 69},
      {"Name":"Rohit", "Year": 4, "Rno": 6},
      {"Name":"Shubham", "Year": 1, "Rno": 9},
      {"Name":"Sandip", "Year": 2, "Rno": 5},
    ];
  }
}
