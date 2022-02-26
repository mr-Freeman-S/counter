import React from 'react';
import Scoreboard from "./Scoreboard";
import ButtonGroup from "./ButtonGroup";
import s from './counter.module.css'


type CounterPropsType = {
    increment: () => void
    reset: () => void
    valueCounter: number
}

const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <Scoreboard counter={props.valueCounter}/>
            <ButtonGroup valueCounter={props.valueCounter} increment={props.increment} reset={props.reset}/>
        </div>
    );
};

export default Counter;