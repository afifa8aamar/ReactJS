
export const changeAction = (val) => {
  return (dispatch, getState) => {
    console.log(getState())
    dispatch({
      type: "CHANGE", 
      val,
      currentVal: getState().counterReducer.counter
    })
  } 
}

