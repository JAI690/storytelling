import React from 'react';
import '../Styles/Message.css'
import StartButton from './StartButton';
import DecisionButton from './DecisionButton';

const messages = {
    '': 'Homer is a middle-class working man, father of 3 and a loved husband. This night he went to sleep without knowing his next day will be on YOUR HANDS, help him to have a good day (or not).',
    'A': 'You decided for homer to work today, and this morning he received a call from his boss letting him choose between working from home or at the office. What should he do?',
    'A1': 'Hey we are working remote, that is really good for you and really bad for your weight control. Now, what should he do?',
    'A11': 'Today Homer will do boring work all day, thanks for your help, however maybe not the best path.',
    'A12': 'Excellent you followed the best practices for working from home. Homer will have time to eat some donuts now. Perhaps, Do you want to start again?',
    'A2': 'You decided the old-fashioned working on-site. However you have some alternatives know. What are you going to do?',
    'A21': 'You fell asleep at work and when Homer woke up there was a complete disaster, nothing is working and he missed his daugther\'s festival. Let\'s try again.',
    'A22': 'You asked for UTO, now Homer can go to grab a beer and his family will have no money for the rest of the week. Well Done!',
    'B': 'You start with the right step, Homer will stay at home today, no boring working. And now How do you want to start the day?',
    'B1': 'Thank you for taking care of Homer, exercise is always good, he is not use to it, though. What should he do next?',
    'B11': 'Those *vitamins* were delicious and Homer is full of energy, let\'s hope he doesn\'t have a heart attack.',
    'B12': 'That was not exciting, just a regular day passing from this senseless life...',
    'B2': 'Donuts... perfect decision for this excellent day. But ...',
    'B21': 'You provoke a philosophical thinking loop on wether Homer is eating too much, what is too much? What is even thinking? and perhaps those donuts never existed...',
    'B22': 'Congratulations you found the hidden path, please don\'t tell anybody!!',
}

const titles = {
    '': 'Homer on your hands',
    'A': 'Working Homer',
    'A1': 'Working Remote',
    'A11': 'Boring Working',
    'A12': 'Good Practices',
    'A2': 'Working on-site',
    'A21': 'Disaster',
    'A22': 'Boring Working',
    'B': 'Day off',
    'B1': 'Work-out',
    'B11': 'Super Powers',
    'B12': 'Normal day',
    'B2': 'Let\'s eat',
    'B21': 'Philosophical Homer',
    'B22': 'Hidden path',
}

const Message = props => {

    return (

        <div className='message'>
            <div className='textArea'>

                <h1>{titles[props.state]}</h1>
                <p>
                {messages[props.state]}
                </p>

            {props.state==='start'?
                <StartButton message='START' onClickHandler={props.onClickHandler}/>:
                props.state===''?
                    <DecisionButton decisionA='A' decisionB='B' onClickHandler={props.onClickHandler}/>:
                    props.state.length<3?
                        <DecisionButton decisionA={props.state+'1'} decisionB={props.state+'2'} onClickHandler={props.onClickHandler}/>:
                        <StartButton message='RESTART' onClickHandler={props.reset}/>
            }
            </div>
        </div>

    
    );
     
};
 
export default Message;