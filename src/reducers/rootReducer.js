const initialState = {
  name: 'David',
  currentShip: null,
}

function rootReducer(state = initialState, action){
  switch(action.type){
    
    case 'UPDATE':
     return { ...state, ...action.payload }
    
    case 'SHIP':
      return { ...state, ...action.payload }
    
    default: 
      return state 
  }
}

export default rootReducer 