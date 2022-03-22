import React from 'react';
import Scoreboard from "./Scoreboard";
import ButtonGroup from "./ButtonGroup";
import s from './counter.module.css'


type CounterPropsType = {
    increment: () => void
    reset: () => void
    valueCounter: number
    setCounterValue:(n:number)=>void
}

const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <Scoreboard counter={props.valueCounter}/>
            <ButtonGroup setCounterValue={props.setCounterValue} valueCounter={props.valueCounter} increment={props.increment} reset={props.reset}/>
        </div>
    );
};

export default Counter;