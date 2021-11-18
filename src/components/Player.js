function Player({playerData, isAttacking, setIsAttacking}) {
    const {weapon} = playerData
    let playerStyle = isAttacking ? {
        transform: 'translate(-200px, 0px)'
    } : null;
    return (
        <div className='player' style={playerStyle}>
            <img className='weapon' src={weapon} />
            <img className='hero' src={playerData.image}/>
        </div>
    )
}

export default Player