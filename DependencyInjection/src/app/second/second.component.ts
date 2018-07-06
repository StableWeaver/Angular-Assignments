import { Component, OnInit } from '@angular/core';
import { BatchesService } from '../batches.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
public batches=[];
  constructor(private info:BatchesService) { }

  ngOnInit() {
    this.batches=this.info.sendData();
  
  }

}
