import Nav from "./Nav"

function Profile() {
    return (
        <div className='fight-background'>
            <div className='formbox'>
                <img className='prof-pic' alt='Profile Pic' src='https://cdn.discordapp.com/attachments/900501298049347625/910072991717670932/cd850e057237e7dff105eb8a3c03ea4d_adobespark.png'/>
                <br />
                <form className='prof-form'>
                    <h3>Username</h3>
                    <input className='input'></input>
                    <br />
                    <h3>Image Url</h3>
                    <input className='input'></input>
                    <br />
                    <h3>Weapon</h3>
                    <div className='armory'>
                        <img className='nav-img' src='/images/hero/sword.png' />
                        <input type='radio' id='weapon1' value='weapon1' name='weapon'></input>
                        <img className='nav-img' src='/images/hero/axe.png' />
                        <input type='radio' id='weapon2' value='weapon1' name='weapon'></input>
                        <img className='nav-img' src='/images/hero/spear.png' />
                        <input type='radio' id='weapon3' value='weapon1' name='weapon'></input>
                    </div>
                </form>
            </div>
            <Nav />
        </div>
    )
}
export default Profile