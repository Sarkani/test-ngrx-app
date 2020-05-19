import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import * as dataTest from "../testngrx.reducers";
import * as dataActions from "../testingngrx.actions";

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.sass']
})
export class RightComponent implements OnInit {

  constructor(private store: Store<{storeData: {number:number}}>) { }

  ngOnInit(): void {
  }


  addOne(){
    this.store.dispatch(new dataActions.AddNumber());
  }

  minusOne(){
    this.store.dispatch(new dataActions.MinusNumber());
  }

}
