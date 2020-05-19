import { Action } from '@ngrx/store';

export const ADD_NUMBER = 'ADD_NUMBER';
export const MINUS_NUMBER = 'MINUS_NUMBER';

export class AddNumber implements Action {
    readonly type = ADD_NUMBER;
}
export class MinusNumber implements Action {
    readonly type = MINUS_NUMBER;
}

export type NumberAction = AddNumber | MinusNumber;