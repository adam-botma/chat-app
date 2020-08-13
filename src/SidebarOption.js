import React from 'react';
import './SidebarOption.css';
import { useHistory } from 'react-router-dom';
import db from './firebase';

function SidebarOption({ Icon, title, id,  addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`)
    } else{
      history.push(title);
    }
  }

  const addChannel = () => {

    const channelName = prompt('Please Enter a Channel Name')

    if(channelName){
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };


  return (
    <div className='sidebar-option' onClick={addChannelOption ? addChannel : selectChannel }>
      {Icon && <Icon className='sidebar-option-icon' />}
      {Icon ? <h3>{title}</h3> : <h3 className='sidebar-option-channel'><span className='sidebar-hashtag'>#</span> {title}</h3>}
    </div>

  )
}

export default SidebarOption;
