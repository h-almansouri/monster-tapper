import { useEffect } from "react"
import { useState } from "react/cjs/react.development"

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
    console.log(currStage)
    const [currMonster, setCurrMonster] = useState(monsters[Math.floor(currStage/5)])
    const [hp, setHp] = useState(monsters[Math.floor(currStage/5)].hp)

    if (monsters.length > 0 && currMonster != undefined) {
        function handleClick() {
            handleAttack()
            // console.log(hp)
            setHp(hp => hp - playerData.damage)
            if (hp <= 0 || hp <= playerData.damage) {
                console.log('dead')
                if (deathCount < 4) {
                    setDeathCount(deathCount => deathCount + 1)
                } else {
                    setDeathCount(0)
                }
                setCurrStage(currStage => currStage + 1)
                fetch(`http://localhost:3000/users/${playerData.id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        currentStage: playerData.currentStage + 1,
                        gold: playerData.gold + currMonster.goldDrop
                      })
                })
                .then(res => res.json())
                .then(data => {
                    patchPlayerData(data)
                    setCurrMonster(monsters[Math.floor(currStage/5)])
                    setCurrGold(playerData.gold + currMonster.goldDrop)
                    setHp(monsters[Math.floor(currStage/5)].hp)
                    // window.location.reload()
                })
                console.log('currStage:' + currStage)
                console.log('math floor:' + Math.floor(currStage/5))
            }
            console.log('hp:' + hp)
        }
    
        return (
            <div className={shake ? 'monster shake': 'monster'} onClick={handleClick} onAnimationEnd={stopShake}>
                <div className='hp-outer'>
                    <div className='hp-inner' style={{width: `${(hp / currMonster.hp)*100}%`}}></div>
                </div>
                <img src={currMonster.image} />
            </div>
        )
    } else {
        return null
    }
}

export default Monster