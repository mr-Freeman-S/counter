import React from 'react';
import s from './counter.module.css'

type Scoreboard = {
    counter: number
}

const Scoreboard = (props: Scoreboard) => {
    return (
        <div className={`${s.scoreboard} ${ props.counter > 4 ? s.red : ''}`}>
            {props.counter}
        </div>
    );
};

export default Scoreboard;