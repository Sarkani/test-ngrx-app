import * as NumberActions from './testingngrx.actions'

export const ADD_NUMBER = 'ADD_NUMBER';

export interface FeatureState {
    testing: State;
  }

export interface State {
    number: {number:number};
  }

const numberState: State = {
    number: {
        number: 0
    }
}

export function ngrxStore(state = numberState, action: NumberActions.NumberAction ){
    switch(action.type){
        case NumberActions.ADD_NUMBER:
            const newPlusNumber = {...state.number};
            newPlusNumber.number = ++newPlusNumber.number;
            return {
                ...state,
                number: newPlusNumber
            };
        case NumberActions.MINUS_NUMBER:
            const newMinusNumber = {...state.number};
            newMinusNumber.number = --newMinusNumber.number;
            return {
                ...state,
                number: newMinusNumber
            }
    }
    return state;
}