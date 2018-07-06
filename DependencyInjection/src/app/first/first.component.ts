import { Component, OnInit } from '@angular/core';
import { BatchesService } from '../batches.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
public batches =[];
  constructor(private data:BatchesService) { }

  ngOnInit() {
    this.batches=this.data.sendData();
  }

}
