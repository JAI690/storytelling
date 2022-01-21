import React, { useState } from 'react';
import '../Styles/MainFrame.css';
import Message from './Message';
import ClipDisplay from './ClipDisplay';

const MainFrame = props => {
    const [messageState,setMessageState] = useState(false);
    const [clip,setClip] = useState('perrito');
    const [history, setHistory] = useState('start')

    const restart = function(){
        setMessageState(false);
        setHistory('start')
        setClip('perrito');
    }

    const changeState = function(){
        setMessageState(!messageState);
    };

    const transition = function(){
        setClip('waiting');
    }

    const selectHistory = (decision)=>{
        transition();
        setHistory(decision);
        if(decision==='start'){setHistory('')}
        setTimeout(() => {
            changeClip(decision);
        }, 1800);

    };

    const changeClip = function(decision){

        switch (decision) {
            case 'start':
                setClip('tiburon');
                break;

            case 'A':
                setClip('spin-chair');
                break;

                case 'A1':
                    setClip('eating');
                    break;

                    case 'A11':
                        setClip('excercesing');
                        break;
                    case 'A12':
                        setClip('exhausted');
                        break;

                case 'A2':
                    setClip('go-sleep');
                    break;

                    case 'A21':
                        setClip('sitting to work');
                        break;
                    case 'A22':
                        setClip('thinking');
                        break;

            case 'B':
                setClip('working-remote');
                break;

                case 'B1':
                    setClip('typing');
                    break;
                    
                    case 'B11':
                        setClip('wakingup');
                        break;
                    case 'B12':
                        setClip('wakingup2');
                        break;

                case 'B2':
                    setClip('work-leaving');
                    break;    
                    
                    case 'B21':
                        setClip('work-onfire');
                        break;   
                    case 'B22':
                        setClip('tiburon');
                        break;   
            default:
                setClip('perrito')
                break;
        }
    };

    return (
        <div className='Principal' onClick={() => {changeState()}} >

            <ClipDisplay state={history} src= {'clips/'+clip+'.gif'}  />

            <div className='message' style={messageState ?  {display: ''} : {display: 'none'}}>

                <Message state={history} onClickHandler={selectHistory} reset={restart}/>

            </div>
        </div>
    );
     
};
 
export default MainFrame;