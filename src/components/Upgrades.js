import { useEffect, useState } from "react"
import Nav from "./Nav"
import StageInfo from "./StageInfo"
import UpgradeCard from "./UpgradeCard"

function Upgrades({
    playerData, 
    currStage,
    setPlayerData, 
    currGold,
    setCurrGold,
    currDamage,
    setCurrDamage,
    goldMultiplier,
    setGoldMultiplier,
    patchUpgrades
    }) {
    const [upgrades, setUpgrades] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/upgrades')
        .then(res => res.json())
        .then(data => setUpgrades(data))
    }, [])

    const upgradesList = upgrades.map(upgrade => <UpgradeCard 
        key={upgrade.id} 
        playerData={playerData}
        upgrade={upgrade} 
        setPlayerData={setPlayerData} 
        currGold={currGold} 
        setCurrGold={setCurrGold}
        currDamage={currDamage}
        goldMultiplier={goldMultiplier} />)

    return (
        <div className='fight-background'>
            <StageInfo playerData={playerData} currGold={currGold} currStage={currStage} />
            <div className='upgrade-container'>
                {upgradesList}
            </div>
            <Nav />
        </div>
    )
}
export default Upgrades