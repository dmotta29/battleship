const initialState = {
  name: 'David'
}

function rootReducer(state = initialState, action){
  switch(action.type){
    
    case 'INCREMENT':
    return {name: state.name + 1 }
    
    case 'DECREMENT':
    return {name: state.name - 1 }
    
    default: 
      return state 
  }
}

export default rootReducer 