function Player({playerData, isAttacking, setIsAttacking}) {
    const {hero, weapon} = playerData[0]
    let playerStyle = isAttacking ? {
        transform: 'translate(-200px, 0px)'
    } : null;
    return (
        <div className='player' style={playerStyle}>
            <img className='weapon' src={weapon} />
            <img className='hero' src={hero[0].image}/>
        </div>
    )
}

export default Player