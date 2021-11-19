import { useState } from "react"

function UpgradeCard({
    upgrade, 
    playerData, 
    setPlayerData, 
    currGold, 
    setCurrGold, 
    currDamage, 
    goldMultiplier}) {

    const [upgradeCost, setUpgradeCost] = useState(upgrade.cost)
    
    function handleClick() {
        if (currGold > upgradeCost) {
            if (upgrade.id === 1) {
                setPlayerData(playerData => ({...playerData, 
                    damage : Math.ceil(currDamage * upgrade.multiplier), 
                    gold : currGold - upgradeCost
                }))
            } else if (upgrade.id === 2) {
                setPlayerData({...playerData, 
                    goldMultiplier : goldMultiplier * upgrade.multiplier, 
                    gold : currGold - upgradeCost
                })
            }
            fetch(`http://localhost:3000/upgrades/${upgrade.id}`, {
                method: 'PATCH',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({cost : Math.ceil(upgradeCost * 1.5)})
            })
            .then(res => res.json())
            .then(data => {
                setUpgradeCost(data.cost)
                setCurrGold(currGold - upgradeCost)
            })
        } else {
            alert('Not Enough Gold!')
        }
    }

    return (
        <div className='upgrade-card'>
            <h2 className='upgrade-detail'>{upgrade.multiplier}x {upgrade.name}</h2>
            <p className='upgrade-detail'>{upgrade.description}</p>
            <button className='upgrade-detail' onClick={handleClick}>Buy: {upgradeCost} Gold</button>
        </div>
    )
}

export default UpgradeCard