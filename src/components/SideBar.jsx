import React from 'react'

function SideBar() {
  return (
    <div className='sidebar'>
      <button className="compose">
        <img className='composeIcon' src="https://cdn0.iconfinder.com/data/icons/email-7/100/Minio_Email_Bold-66-512.png" alt="" />
        Compose
      </button>
      <div className="sidenav">
        <button className="sideItem">
          <img className='sideItemIcons' src="" alt="" />
          Inbox
          </button>
        <button className="sideItem">
          <img className='sideItemIcons' src="" alt="" />
          Starred
        </button>
        <button className="sideItem">
          <img className='sideItemIcons' src="" alt="" />
          Snoozed
        </button>
        <button className="sideItem">
          <img className='sideItemIcons' src="" alt="" />
          Sent
        </button>
        <button className="sideItem">
          <img className='sideItemIcons' src="" alt="" />
          Drafts
        </button>
        <button className="sideItem">
          More
        </button>
        <div className="section">
          <div className="label">Labels</div>
        <button className="sideItem">
          <img className='sideItemIcons' src="" alt="" />
          Billing
        </button>
        <button className="sideItem">
          More
        </button>
        </div>
      </div>
      
    </div>
  )
}

export default SideBar
