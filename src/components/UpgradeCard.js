function UpgradeCard({upgrade}) {
    
    function handleClick() {
        return 
    }

    return (
        <div className='upgrade-card'>
            <h2 className='upgrade-detail'>{upgrade.multiplier}x {upgrade.name}</h2>
            <p className='upgrade-detail'>{upgrade.description}</p>
            <button className='upgrade-detail'>Buy: {upgrade.cost} Gold</button>
        </div>
    )
}

export default UpgradeCard