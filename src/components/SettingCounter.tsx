import React, {ChangeEvent, useState} from 'react';
import Scoreboard from "./Scoreboard";
import ButtonGroup from "./ButtonGroup";
import s from './counter.module.css'


type SettingCounterPropsType = {
    minMaxValue: Array<number>
    onChangeCallback: (value: Array<number>) => void
}

const SettingCounter = (props: SettingCounterPropsType) => {

    const [error, setError] = useState<boolean>(false)

    const maxChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(+e.target.value)
        if (+e.target.value >= props.minMaxValue[0]) {
            setError(!error)
            props.onChangeCallback([props.minMaxValue[0], +e.target.value])
        } else if (+e.target.value <= props.minMaxValue[0]) {
            setError(true)
            error && console.log('ERROR')
        }
    }
    const minChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(+e.target.value)
        if (+e.target.value < props.minMaxValue[1] && +e.target.value > -1) {
            setError(!error)
            props.onChangeCallback([+e.target.value, props.minMaxValue[1]])
        } else if (+e.target.value <= props.minMaxValue[0]) {
            setError(true)
            error && console.log('ERROR')
        }
    }
    return (
        <div className={s.counter}>

            <span>max</span><input onChange={maxChangeEventHandler} type="number" value={props.minMaxValue[1]}/>
            <span>max</span><input onChange={minChangeEventHandler} type="number" value={props.minMaxValue[0]}/>
            <ButtonGroup setCounterValue={() => {
            }} valueCounter={3} increment={() => {
            }} reset={() => {
            }}/>
        </div>
    );
};

export default SettingCounter;