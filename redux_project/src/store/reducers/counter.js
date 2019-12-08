const initialState = {
  counter:0
}

const counterReducer = (state = initialState, actions) => {
  switch(actions.type){
    case "CHANGE":
      return {
        counter: state.counter + actions.val
      }
    default:
      return state;
  }
}

export default counterReducer;