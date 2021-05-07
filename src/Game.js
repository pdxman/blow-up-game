import React, {useState, useEffect} from 'react'

export default function Game() {
    const [playerNum, setPlayerNum] = useState(10) 
    const [computerNum, setComputerNum] = useState(10) 
    const [gameStatus, setGameStatus] = useState('Click the button you coward LOL!')

    const [gameArea, updateGameArea] = useState({
        display: 'flex',
        maxWidth: '23em',
        margin: '5em auto',
        justifyContent: 'space-between'
    })

    const [square, updateSquare] = useState({
        display: 'flex',
        maxWidth: '23em',
        margin: '5em auto',
        justifyContent: 'center', 
        width: '10em',
        height: '10em', 
        border: '5px solid #bbc8ba'
    })

    const growSquare = () => {
        updateSquare({
            display: 'flex',
            maxWidth: '23em',
            margin: '5em auto',
            justifyContent: 'center', 
            width: '10em',
            height: '10em', 
            border: '5px solid #bbc8ba',
            transform: 'scale(1.5)',
            transition: 'all 1s ease'
        })
    }

    const shrinkSquare = () => {
        updateSquare({
            display: 'flex',
            maxWidth: '23em',
            margin: '5em auto',
            justifyContent: 'center', 
            width: '10em',
            height: '10em', 
            border: '5px solid #bbc8ba',
            transform: 'scale(.5)',
            transition: 'all 1s ease'
        })
    }

  

   function updateNums(){
        setPlayerNum(Math.floor(Math.random() * 20))
        setComputerNum(Math.floor(Math.random() * 30))
        // var howManyTimes = 0
        // howManyTimes = howManyTimes + 1
        // console.log(howManyTimes)
    }

    useEffect(() => {
        playerNum >= computerNum ? setGameStatus('Dude, You WON!') : setGameStatus('Dude, You LOST!')
        playerNum >= computerNum ? growSquare() : shrinkSquare()
       
    }, [playerNum, computerNum])

    return(
        <div>
            <h1>The Game!</h1>
            <p>Click the button and test your luck against the Computer gone mad!</p>
            {/* <button onClick={growSquare}>Click if you Dare!</button> */}
            <button onClick={updateNums}>Click if you Dare!</button>
            <div style={gameArea}>
                <div>Your Result: {playerNum}</div>
                <div>Computer Result: {computerNum}</div>
            </div>
            <p>{gameStatus}</p>
            <div style={gameArea}>
                <div style={square}></div>
            </div>
        </div>
    )
}


// How can I continue increasing size of square with each click?- with useEffect!
// why do I need all of the styles in the "update" state- can I add to it like an array?
// functionality to add: 
    // 1) set game to 5 tries
        // count how many times- see howManyTimes out above
    // 2) it will count how many wins/losses
    // 3) if you lose 3 times, the square will blow up 