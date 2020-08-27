const initialGrid = []
initialGrid.length = 10 
initialGrid.fill(initialGrid.slice().fill(null))


const initialState = {
  name: '',
  currentShip: null,
  userGrid: initialGrid,
  cpuGrid: createCpuGrid(),
  userShips: [],
  cpuShips: []
}


function rootReducer(state = initialState, action){
  switch(action.type){
    
    case 'UPDATE':
     return { ...state, ...action.payload }
    
    case 'SHIP':
      return { ...state, ...action.payload }

    case 'UPDATEGRID':
      return { ...state, ...action.payload }
      
    case 'CPUGRID':
        return { ...state, ...action.payload }
    
    default: 
      return state 
  }
}

export function createCpuGrid(){
  const submarine = {type: 'submarine', lives: 2}  
  const cruiser1 = {type: 'cruiser', lives: 3}
  const cruiser2 = {type: 'cruiser', lives: 3}
  const cruiser3 = {type: 'cruiser', lives: 3}
  const carrier = {type: 'carrier', lives: 4}


  return  [ 
    [null, null, null, submarine,submarine,null, null, cruiser1, cruiser1,cruiser1],
    [null, null, null, null,null,null, null, null, null,null],
    [null, null, null, null,null,null, null, null, null,null],
    [null, null, null, null,null,null, null, cruiser2, cruiser2,cruiser2],
    [null, null, null, null,null,null, null, null, null,null],
    [cruiser3, cruiser3, cruiser3, null,null,null, null, null, null,null],
    [null, null, null, null,null,null, null, null, null,null],
    [null, null, null, null,null,null, null, null, null,null],
    [null, carrier, carrier, carrier,carrier,null, null, null, null,null],
    [null, null, null, null,null,null, null, null, null,null],
  ]

}

export default rootReducer 