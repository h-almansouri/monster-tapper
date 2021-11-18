import Nav from "./Nav"
import StageInfo from "./StageInfo"

function Upgrades({playerData, currGold, setCurrGold, currStage}) {
    return (
        <div className='fight-background'>
            <StageInfo playerData={playerData} currGold={currGold} currStage={currStage} />
            <Nav />
        </div>
    )
}
export default Upgrades