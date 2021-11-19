import styled, { keyframes } from "styled-components";

const attack = keyframes`
    0% {
        transform: translate(0px, 0px)
    }
    25% {
        transform: translate(-100px, -50px)
    }
    50% {
        transform: translate(-200px, 0px)
    }
    75% {
        transform: translate(-100px, -50px)
    }
    100% {
        transform: translate(0px, 0px);
    }

`

function Player({playerData, isAttacking, updatedInfo}) {
    // let playerStyle = isAttacking ? {
    //     transform: 'translate(-200px, 0px)'
    // } : null;
    
    return (
        isAttacking ?
        <PlayerCont className='player'>
            <img className={`weapon ${updatedInfo.weaponName}`} src={updatedInfo.weapon} />
            <img className='hero' src={playerData.image}/>
        </PlayerCont> :
        <div className='player'>
            <img className={`weapon ${updatedInfo.weaponName}`} src={updatedInfo.weapon} />
            <img className='hero' src={playerData.image}/>
        </div>
    )
}

export default Player

const PlayerCont = styled.div`
    animation-name: ${attack};
    animation-duration: 0.2s;
    animation-iteration-count: 1;
`