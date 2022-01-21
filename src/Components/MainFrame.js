import React, { useState } from 'react';
import '../Styles/MainFrame.css';
import Message from './Message';
import ClipDisplay from './ClipDisplay';

const MainFrame = props => {
    const [messageState,setMessageState] = useState(false);
    const [clip,setClip] = useState('perrito');
    const [history, setHistory] = useState('start')
    const [loading, setLoading] = useState(false);

    const restart = function(){
        setMessageState(false);
        setHistory('start')
        setClip('perrito');
    }

    const changeState = function(){
        if(!loading)setMessageState(!messageState);
    };

    const transition = function(){
        setClip('waiting');
    }

    const selectHistory = (decision)=>{
        transition();
        setHistory(decision);
        setLoading(true)
        if(decision==='start'){setHistory('')}
        setTimeout(() => {
            changeClip(decision);
            setLoading(false);
        }, 1800);

    };

    const changeClip = function(decision){

        switch (decision) {
            case 'start':
                setClip('go-sleep');
                break;

            case 'A':
                setClip('wakingup');
                break;

                case 'A1':
                    setClip('sitting to work');
                    break;

                    case 'A11':
                        setClip('typing');
                        break;
                    case 'A12':
                        setClip('working-remote');
                        break;

                case 'A2':
                    setClip('spin-chair');
                    break;

                    case 'A21':
                        setClip('work-onfire');
                        break;
                    case 'A22':
                        setClip('work-leaving');
                        break;

            case 'B':
                setClip('wakingup');
                break;

                case 'B1':
                    setClip('excercesing');
                    break;
                    
                    case 'B11':
                        setClip('jogging');
                        break;
                    case 'B12':
                        setClip('wakingup2');
                        break;

                case 'B2':
                    setClip('eating');
                    break;    
                    
                    case 'B21':
                        setClip('thinking');
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

            <div style={messageState ?  {display: ''} : {display: 'none'}}>

                <Message state={history} onClickHandler={selectHistory} reset={restart}/>

            </div>
        </div>
    );
     
};
 
export default MainFrame;