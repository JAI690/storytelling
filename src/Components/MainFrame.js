import React from 'react';
import '../Styles/MainFrame.css';
import Message from './Message';
import ClipDisplay from './ClipDisplay';
import { useSelector } from 'react-redux';
import * as Helpers from '../Hooks/customHook';

const MainFrame = props => {

    const { isMessageDisplay, isLoading } = useSelector((state) => state);
    
    const {toggleMessage} = Helpers;

    return (
        <div className='Principal' onClick={() =>  toggleMessage(isLoading)} >

            <ClipDisplay />

            <div style={isMessageDisplay?  {display: ''} : {display: 'none'}}>

                <Message />

            </div>
        </div>
    );
     
};
 
export default MainFrame;