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
  //state to know what btn is being click  category
  const [category, setCategory] = useState('Primary')
  const changeView = (category)=>{
    setCategory(category)
    console.log(category)
  }

  //helper fuction to render the mailDisplay
  const tab = ()=>{
    if(category === 'Primary'){
      return <Primary />
    }else if(category === "Promotions"){
      return <Promotions />
    }else if(category === "Social"){
      return <Social />
    }else if(category === "Updates"){
      return  <Updates />
    }else if(category === "Forums"){
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
