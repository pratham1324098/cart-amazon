import React ,{useState} from 'react'
import './SidebarOption.css'
import Body from './Body'
function SidebarOption({title,Icon}) {
  const handleChange=()=>{
    console.log('hello')
  }
  return (
    <div className="sidebarOption" onclick={handleChange}>
      {Icon && <Icon className="sidebarOption_Icon" />}
      {Icon? <h4>{title}</h4>:<p>{title}</p>}
    </div>
  )
}

export default SidebarOption
