import React from 'react'
import MailPreview from './MailPreview'
import { useState } from 'react'
import Primary from './Primary'
import Promotions from './Promotions'
import Social from './Social'
import Updates from './Updates'
import Forums from './Forums'
import MailDisplay from './MailDisplay'
import CheckBox from './CheckBox'

function MailView() {
  const [page, setPage] = useState('Primary')
  const changeView = (page)=>{
    setPage(page)
    console.log(page)

  }
  const tab = ()=>{
    if(page === 'Primary'){
      return <Primary />
    }else if(page === "Promotions"){
      return <Promotions />
    }else if(page === "Social"){
      return <Social />
    }else if(page === "Updates"){
      return  <Updates />
    }else if(page === "Forums"){
      return <Forums />
    }
  }
  return (
    <div className='mailView'>
      <div className="firstNav">
        <CheckBox />
        <button className="refresh">refresh</button>
        <button className="options">more</button>
      </div>
      <div className="secNav">
        <div className='secNavItems' onClick={()=>changeView('Primary')}>
            <img className='secNavIcons' src="https://static-00.iconduck.com/assets.00/inbox-icon-2048x2048-ajcpwir1.png" alt="" />
            Primary
        </div>
        <div className='secNavItems' onClick={()=>changeView('Promotions')}>
            <img className='secNavIcons' src="" alt="" />
            Promotions
        </div>
        <div className='secNavItems' onClick={()=>changeView('Social')}>
            <img className='secNavIcons' src="" alt="" />
            Social
        </div>
        <div className='secNavItems'onClick={()=>changeView('Updates')}>
            <img className='secNavIcons' src="" alt="" />
            Updates
        </div>
        <div className='secNavItems'onClick={()=>changeView('Forums')}>
            <img className='secNavIcons' src="" alt="" />
            Forums
        </div>
      </div>
      <MailDisplay tab={tab()}/>
    </div>
  )
}

export default MailView
