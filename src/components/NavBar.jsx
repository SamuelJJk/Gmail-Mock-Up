import React from 'react'

function NavBar() {
  return (
    <div className='navbar'>
      <div className="leftContainer">
        <button></button>
        <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="logo" className='logo' />
        <div className="logoName">Gmail</div>
      </div>
      <div className="middleContainer">
        <input type="text" className="serchbar" placeholder='Search mail'/>
      </div>
      <div className="rightContainer">
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  )
}

export default NavBar
