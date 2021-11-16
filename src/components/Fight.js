import React, { useEffect, useState } from "react"
import Monster from "./Monster"
import Nav from "./Nav"
import Player from "./Player"
import StageInfo from "./StageInfo"

function Fight({playerData}) {
    const [monsters, setMonsters] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/monster')
        .then(res => res.json())
        .then(data => setMonsters(data))
    },[])
    // console.log(playerData[0])
    // console.log(monsters[playerData[0].currentStage])

    return (
        <div className='fight-background'>
            <StageInfo />
            <Monster />
            <Player />
            <Nav />
        </div>
    )
}

export default Fight