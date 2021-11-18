function StageInfo({playerData, currGold, currStage}) {
    return (
        <div className="stage-info">
            <span>Damage: {playerData[0].damage}</span>
            <span>Stage: {currStage} </span>
            <span>
                <img className='gold' src='/images/hero/gold.png'></img>
                <span>{currGold}</span>
            </span>
        </div>
    )
}

export default StageInfo