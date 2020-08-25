const initialGrid = []
initialGrid.length = 10 
initialGrid.fill(initialGrid.slice().fill(null))


const initialState = {
  name: 'David',
  currentShip: null,
  grid: initialGrid
}


function rootReducer(state = initialState, action){
  switch(action.type){
    
    case 'UPDATE':
     return { ...state, ...action.payload }
    
    case 'SHIP':
      return { ...state, ...action.payload }

    case 'UPDATEGRID':
      return { ...state, ...action.payload }
    
    default: 
      return state 
  }
}

export default rootReducer 