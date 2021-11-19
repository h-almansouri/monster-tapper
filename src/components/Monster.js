import { useState } from "react"

function Monster({
    monsters, 
    playerData, 
    patchPlayerData, 
    handleAttack, 
    stopShake, 
    shake, 
    setCurrGold, 
    deathCount, 
    setDeathCount,
    currStage,
    setCurrStage
    }) {
    let randomNum = Math.floor(Math.random()*10)
    const hpScaler = (currStage-1) * 20
    const goldScaler = (currStage-1) * 10
    const [currMonster, setCurrMonster] = useState(monsters[randomNum])
    const scaledHp = currMonster.hp + hpScaler
    const [hp, setHp] = useState(scaledHp)
    console.log('scaledHp:' + scaledHp)
    console.log('hp:' + hp)

    if (monsters.length > 0 && currMonster != undefined) {
        function handleClick() {
            handleAttack()
            setHp(hp => hp - playerData.damage)
            if ((hp) <= 0 || (hp) <= playerData.damage) {
                if (deathCount < 4) {
                    setDeathCount(deathCount => deathCount + 1)
                } else {
                    setDeathCount(0)
                }
                // setCurrStage(currStage => currStage + 1)
                fetch(`http://localhost:3000/users/${playerData.id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        currentStage: playerData.currentStage + 1,
                        gold: playerData.gold + Math.ceil((currMonster.goldDrop + goldScaler) * playerData.goldMultiplier)
                      })
                })
                .then(res => res.json())
                .then(data => {
                    randomNum = Math.floor(Math.random()*10)
                    setCurrStage(currStage => currStage + 1)
                    patchPlayerData(data)
                    setCurrMonster(monsters[randomNum])
                    setCurrGold(playerData.gold + Math.ceil((currMonster.goldDrop + goldScaler) * playerData.goldMultiplier))
                    setHp(scaledHp + 20)
                })
            }
        }
        return (
            <div className={shake ? 'monster shake': 'monster'} onClick={handleClick} onAnimationEnd={stopShake}>
                <div className='hp-outer'>
                    <div className='hp-inner' style={{width: `${((hp) / (currMonster.hp + (hpScaler)))*100}%`}}></div>
                </div>
                <img src={currMonster.image} />
            </div>
        )
    } else {
        return null
    }
}

export default Monster