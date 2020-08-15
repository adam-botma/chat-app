import React, { useEffect, useState } from 'react';
import db from './firebase';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Message from './Message';
import ChatInput from './ChatInput';


function Chat (){
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if(roomId){
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomDetails(snapshot.data())
      ))
    }

    db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
    .onSnapshot(snapshot=> setRoomMessages(
      snapshot.docs.map(doc => doc.data())
    ))
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
      <div className='class-messages'>
        {roomMessages.map(({ message, timestamp, userImage, user }) => (
          <Message
            message={message}
            timestamp={timestamp}
            userImage={userImage}
            user={user}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
    </div>

  );
}

export default Chat;
