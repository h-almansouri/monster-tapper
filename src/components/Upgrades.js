import Nav from "./Nav"
import StageInfo from "./StageInfo"

function Upgrades({playerData, currGold, setCurrGold, currStage}) {
    if (playerData.length > 0) {
        return (
            <div className='fight-background'>
                <StageInfo playerData={playerData} currGold={currGold} currStage={currStage} />
                <Nav />
            </div>
        )
    } else {
        return null
    }
}
export default Upgrades