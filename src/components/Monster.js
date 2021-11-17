import { useEffect } from "react"
import { useState } from "react/cjs/react.development"

function Monster({monsters, playerData, patchPlayerData, handleAttack, stopShake, shake, setCurrGold}) {
    const {currentStage, hero} = playerData[0]
    const [currMonster, setCurrMonster] = useState(monsters[currentStage])
    const [hp, setHp] = useState(100)
    // console.log(((hp-50) / currMonster.hp)*100)

    if (monsters.length > 0 && currMonster != undefined) {
        // setCurrMonster(monsters[currentStage])
        // setHp(monsters[currentStage].hp)

        function handleClick() {
            handleAttack()
            console.log(hp)
            setHp(hp => hp - hero[0].damage)
            if (hp <= 0 || hp <= hero[0].damage) {
                console.log('dead')
                patchGold()
            }
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
                setCurrMonster(monsters[currentStage])
                setCurrGold(hero[0].gold + currMonster.goldDrop)
                setHp(currMonster.hp)
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