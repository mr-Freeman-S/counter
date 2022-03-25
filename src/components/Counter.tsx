import React, {useEffect} from 'react';
import ButtonGroup from "./ButtonGroup";
import s from './counter.module.css'
import SuperButton from "./SuperButton";


type CounterPropsType = {
    increment: () => void
    reset: () => void
    valueCounter: number
    setCounterValue: (n: number) => void
    rendered: boolean
    minMaxValue: number[]
}

const Counter = (props: CounterPropsType) => {
    let maxValue = props.valueCounter === props.minMaxValue[1]
    let finalClassName = maxValue ? `${s.scoreboard} ${s.red}` : s.scoreboard

    return (
        <div className={s.counter}>
            {props.rendered ?
                <div className={s.scoreError}>enter values and press "SET"</div>
                : <div className={finalClassName}>{props.valueCounter}</div>}
            <div className={s.buttonGropeStyle}>
                <SuperButton disabled={maxValue} callback={props.increment} className={s.buttonStyle} name={'INC'}/>
                <SuperButton callback={props.reset} className={s.buttonStyle} name={'RESET'}/>
            </div>
        </div>
    );
};

export default Counter;