import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import FiberManualRecodIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase';


function Sidebar() {

  const [channels, setChannels] = useState([]);

  useEffect(()=>{

    db.collection('rooms').onSnapshot(snapshot => (
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        }))
      )
    ));
  },[]);

  return (
    <div className="sidebar">
      <div className='sidebar-header'>
        <div className='sidebar-info'>
          <h2>Name</h2>
          <h3>
            <FiberManualRecodIcon />
            AdzBot
      </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon = {InsertCommentIcon} title='Threads' />
      <SidebarOption Icon={InboxIcon} title='Mentions &amp; Reactions' />
      <SidebarOption Icon={DraftsIcon} title='Saved Items' />
      <SidebarOption Icon={BookmarkBorderIcon} title='Channel Browser' />
      <SidebarOption Icon={PeopleAltIcon} title='People &amp; User Groups'/>
      <SidebarOption Icon={AppsIcon} title='Apps' />
      <SidebarOption Icon={FileCopyIcon} title='File Browser' />
      <SidebarOption Icon={ExpandLessIcon} title='Show Less' />
      <hr/>
      <SidebarOption Icon={ExpandMoreIcon} title='Channels'/>
      <hr />
      <SidebarOption Icon={AddIcon} title='Add Channel' addChannelOption/>
      {channels.map(channel => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>


  )



}

export default Sidebar
