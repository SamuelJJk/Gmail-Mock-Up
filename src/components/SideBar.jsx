import React from 'react'

function SideBar() {
  return (
    <div className='sidebar'>
      <button className="compose">Compose</button>
      <div className="sidenav">
        <button className="sideItem">Inbox</button>
        <button className="sideItem">Starred</button>
        <button className="sideItem">Snoozed</button>
        <button className="sideItem">Sent</button>
        <button className="sideItem">Drafts</button>
        <button className="sideItem">More</button>
        <div className="labels">
        <button className="sideItem">Billing</button>
        <button className="sideItem">More</button>
        </div>
      </div>
      
    </div>
  )
}

export default SideBar
