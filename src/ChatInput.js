import React, { useState } from 'react';
import './ChatInput.css';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';


function ChatInput ({ channelName, channelId }){

  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();

  const sendMessage = (event) => {
    event.preventDefault();

    if (channelId) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL
      })
    }
    setInput('')
  }


  return (
    <div className='chat-input'>
      <form>
        <input placeholder={`Message #${channelName}`} value={input} onChange={event=> setInput(event.target.value)}/>
        <button type='submit' onClick={sendMessage}>Send</button>
      </form>
    </div>
  )
}


export default ChatInput;
