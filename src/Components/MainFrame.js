import React, { useState } from 'react';
import '../Styles/MainFrame.css';
import Message from './Message';
import ClipDisplay from './ClipDisplay';

const MainFrame = props => {
    const [messageState,setMessageState] = useState(false);
    const [clip,setClip] = useState('perrito');

    const changeState = function(){
        setMessageState(!messageState);
    }

    const changeClip = function(){
        if(clip==='perrito'){
            setClip('tiburon');
        }else{
            setClip('perrito')
        }
    }
    return (
        <div className='Principal' onClick={() => {changeState()}} >
            <ClipDisplay src= {'clips/'+clip+'.gif'}  />
            <div className='message' style={messageState ?  {display: ''} : {display: 'none'}}>
                <Message onClick={()=>{changeClip()}}/>
            </div>
        </div>
    );
     
};
 
export default MainFrame;