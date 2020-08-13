import React from 'react';
import './SidebarOption.css';

function SidebarOption({ Icon, title }) {
  return (
    <div className='sidebar-option'>
      {Icon && <Icon className='sidebar-option-icon' />}
      {Icon ? <h3>{title}</h3> : <h3 className='sidebar-option-channel'><span className='sidebar-hashtag'>#</span> {title}</h3>}
    </div>

  )
}

export default SidebarOption;
