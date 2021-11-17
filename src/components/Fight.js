import React, { useEffect, useState } from "react"
import Monster from "./Monster"
import Nav from "./Nav"
import Player from "./Player"
import StageInfo from "./StageInfo"

function Fight({playerData, setPlayerData, currGold, setCurrGold, currStage, setCurrStage}) {
    const {id} = playerData
    const [monsters, setMonsters] = useState([])
    const [isAttacking, setIsAttacking] = useState(false)
    const [shake, setShake] = useState(false)
    // const [currGold, setCurrGold] = useState(playerData[0].hero[0].gold)
    const [deathCount, setDeathCount] = useState(0)
    // const [currStage, setCurrStage] = useState(playerData[0].currentStage)
    

    useEffect(() => {
        fetch('http://localhost:3000/monster')
        .then(res => res.json())
        .then(data => setMonsters(data))
    },[])

    function handleAttack() {
        setShake(true)
        setIsAttacking((isAttacking) => true)
        setTimeout(() => setIsAttacking((isAttacking) => false), 500)
    }

    function stopShake() {
        setShake(false);
    }

    function patchPlayerData(data) {
        setPlayerData([data])
    }
    

    if (monsters.length > 0) {
        return (
            <div className='fight-background'>
                <StageInfo playerData={playerData} currGold={currGold} currStage={currStage} />
                <Monster 
                    monsters={monsters} 
                    playerData={playerData} 
                    handleAttack={handleAttack} 
                    shake={shake} 
                    stopShake={stopShake} 
                    patchPlayerData={patchPlayerData}
                    setCurrGold={setCurrGold}
                    deathCount={deathCount}
                    setDeathCount={setDeathCount}
                    currStage={currStage}
                    setCurrStage={setCurrStage}
                     />
                <Player 
                    playerData={playerData} 
                    isAttacking={isAttacking} 
                    setIsAttacking={setIsAttacking} />
                <Nav />
            </div>
        )
    } else {
        return <div className='fight-background'></div>;
    }
}

export default Fight