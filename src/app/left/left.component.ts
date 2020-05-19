import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import * as dataTest from "../testngrx.reducers";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.sass']
})
export class LeftComponent implements OnInit {
  number:Observable<any>;
  numberTwo:number;

  constructor(private store: Store<{storeData: {number:number}}>) { }

  ngOnInit(): void {
    this.number = this.store.select('storeData');
    
    this.store
      .select("storeData")
      .forEach((v) => this.numberTwo = v.number['number']);


      
  }

}
