function StageInfo({playerData, currGold, currStage}) {
    return (
        <div className="stage-info">
            <span>Damage: {playerData.damage}</span>
            <span>Stage: {currStage} </span>
            <span className='gold-container'>
                <img className='gold' src='/images/hero/gold.png'></img>
                <span className='gold-count'>{currGold}</span>
            </span>
        </div>
    )
}

export default StageInfo