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
    const {hero} = playerData[0]
    // const [currStage, setCurrStage] = useState(playerata[0].currentStage + 1)
    const [currMonster, setCurrMonster] = useState(monsters[Math.floor(currStage/5)])
    const [hp, setHp] = useState(monsters[Math.floor(currStage/5)].hp)

    if (monsters.length > 0 && currMonster != undefined) {
        function handleClick() {
            handleAttack()
            // console.log(hp)
            setHp(hp => hp - hero[0].damage)
            if (hp <= 0 || hp <= hero[0].damage) {
                console.log('dead')
                if (deathCount < 4) {
                    setDeathCount(deathCount => deathCount + 1)
                } else {
                    setDeathCount(0)
                }
                setCurrStage(currStage => currStage + 1)
                // setCurrMonster(currMonster => monsters[Math.floor(currStage/5)])
                // setHp(currMonster.hp)
                patchGold()
                fetch(`http://localhost:3000/player/${playerData[0].id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({currentStage: currStage + 1})
                })
                console.log('currStage:' + currStage)
                console.log('math floor:' + Math.floor(currStage/5))
            }
            console.log('hp:' + hp)
        }
    
        function patchGold() {
            fetch(`http://localhost:3000/player/${playerData[0].id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({hero:[{
                    id: hero[0].id,
                    damage: hero[0].damage,
                    gold : hero[0].gold + currMonster.goldDrop,
                    image: hero[0].image
                }]})
            })
            .then(res => res.json())
            .then(data => {
                patchPlayerData(data)
                setCurrMonster(monsters[Math.floor(currStage/5)])
                setCurrGold(hero[0].gold + currMonster.goldDrop)
                setHp(monsters[Math.floor(currStage/5)].hp)
                // window.location.reload()
            })
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