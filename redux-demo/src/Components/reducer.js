var initialState = 0;

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT": {
      console.log("in reducer increment");

      return state += 1;
    }
    case "DECREMENT": {
        console.log("in reducer decrement");

     return  state -= 1;
    }
    default:
      return state;
  }
}
