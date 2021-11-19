function Player({playerData, isAttacking, updatedInfo}) {
    let playerStyle = isAttacking ? {
        transform: 'translate(-200px, 0px)'
    } : null;
    return (
        <div className='player' style={playerStyle}>
            <img className={`weapon ${updatedInfo.weaponName}`} src={updatedInfo.weapon} />
            <img className='hero' src={playerData.image}/>
        </div>
    )
}

export default Player