import React, { useEffect, useState } from 'react';
import db from './firebase';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


function Chat (){
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);

  useEffect(() => {
    if(roomId){
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomDetails(snapshot.data())
      ))
    }
  }, [roomId])
  return (
    <div className='chat'>
      <div className='chat-header'>
        <div className='chat-header-left'>
          <h4 className='chat-channel-name'>
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className='chat-header-right'>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
    </div>

  );
}

export default Chat;
