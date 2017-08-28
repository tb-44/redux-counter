// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

//CONSTANTS
//Define a constant for increment and decrement
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";


//ACTION CREATORS
//build action creators for increment and decrement
export function increment(amount){
    return {
      type: INCREMENT,
      payload: amount
    }
}

export function decrement(amount){
  return {
    type: DECREMENT,
    payload: amount
  }
}

let initialState = {
  counter: 0
}


//REDUCER
function reducer(state =  initialState, action){
  //create a switch statement handling increment and decrement
  switch(action.type){
    case INCREMENT:
      let startingValue = state.counter;
      let nextValue = action.payload;
      let val = startingValue + nextValue;
        return Object.assign({}, state, { counter: val });
        
    case DECREMENT:
        return Object.assign({}, state, { counter: state.counter - action.payload });

  }
  //handling increment decrement
  return state;

}

export default reducer;
