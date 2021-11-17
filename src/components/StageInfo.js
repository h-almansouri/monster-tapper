function StageInfo({playerData, currGold}) {
    const {currentStage, hero} = playerData[0]
    // console.log(playerData)

    return (
        <div className="stage-info">
            <span>Damage: {hero[0].damage}</span>
            <span>Stage: {currentStage} </span>
            <span>
                <img className='gold' src='/images/hero/gold.png'></img>
                <span>{currGold}</span>
            </span>
        </div>
    )
}

export default StageInfo