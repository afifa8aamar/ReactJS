const initialState = {
  list: [],
  loading: true,
}

const reducer = (state = initialState, actions) => {
  console.log(actions);
  switch(actions.type){
    case 'OK':
      const list = [...actions.list]
      return {
        list,
        loading: false
      }
    case 'NOT_OK':
      return {
        list:[],
        loading:true
      }
    default: return state;
  }
  
}

export default reducer;