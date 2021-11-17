import Nav from "./Nav"
import StageInfo from "./StageInfo"

function Upgrades({playerData}) {
    if (playerData.length > 0) {
        return (
            <div className='fight-background'>
                <StageInfo playerData={playerData}/>
                <Nav />
            </div>
        )
    } else {
        return null
    }
}
export default Upgrades