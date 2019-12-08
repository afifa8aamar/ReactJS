const initialState = {
  list:[]
}

const historyReducer = (state = initialState, actions) => {
  switch(actions.type){
    case "CHANGE":
      const list = [...state.list];
      list.push(actions.currentVal);
      return {
        list:list
      }
    default:
      return state;
  }
}

export default historyReducer;