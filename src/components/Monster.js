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
    const [currMonster, setCurrMonster] = useState(monsters[Math.floor(currStage/5)])
    const [hp, setHp] = useState(monsters[Math.floor(currStage/5)].hp)

    if (monsters.length > 0 && currMonster != undefined) {
        function handleClick() {
            handleAttack()
            setHp(hp => hp - playerData.damage)
            if (hp <= 0 || hp <= playerData.damage) {
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
                        gold: playerData.gold + Math.ceil(currMonster.goldDrop * playerData.goldMultiplier)
                      })
                })
                .then(res => res.json())
                .then(data => {
                    patchPlayerData(data)
                    setCurrMonster(monsters[Math.floor(currStage/5)])
                    setCurrGold(playerData.gold + Math.ceil(currMonster.goldDrop * playerData.goldMultiplier))
                    setHp(monsters[Math.floor(currStage/5)].hp)
                })
            }
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