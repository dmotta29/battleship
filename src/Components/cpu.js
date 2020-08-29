import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CPU () {
  const currentPlayer = useSelector(({currentPlayer}) => currentPlayer)
  const playerName = useSelector(({name}) => name)
  const playedNumbers = useSelector(({cpuPlayedNumbers}) => cpuPlayedNumbers)
  const wasCpuHit = useSelector(({wasCpuHit}) => wasCpuHit)
  const lives = useSelector((state) => state.playerLives)
  const dispatch = useDispatch()
  const userGrid = useSelector((state)=> state.userGrid)
  const nextGrid = userGrid.map(r => r.slice()).slice()

  let play = Math.floor(Math.random() * 99)
  let isHit = false

  if (currentPlayer === 'cpu') {
    if (wasCpuHit) {
      play = playedNumbers[playedNumbers.length - 1] + 1 
    } else {
      while (playedNumbers.includes(play)) {
        play = Math.floor(Math.random() * 99) 
      }    
    }

    playedNumbers.push(play)
    const indexes = play.toString().padStart(2, '0')
    const [i,j] = indexes
    
    
    let value = nextGrid[j][i]
    if (value) {
      isHit = true
      value.lives--
  
      if (value.lives === 0) {
        value.destroyed = true
      } else {
      // setHit(true)
      }
    } else {
      value = {missed: true}
    }
    nextGrid[j][i] = value
  }

  useEffect(() => {
    if(currentPlayer === 'cpu') {
      setTimeout(() => {
        dispatch({type: 'UPDATEGRID', payload: {
          userGrid: nextGrid,
          currentPlayer: playerName,
          wasCpuHit: isHit,
          cpuPlayedNumbers: playedNumbers,
          playerLives: lives - +isHit
        }})
      }, 1000)
    }
  }, [currentPlayer, isHit, playedNumbers, lives, dispatch, nextGrid, playerName])


  return <div></div>
}

export default CPU

