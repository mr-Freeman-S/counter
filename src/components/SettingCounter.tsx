import React, {ChangeEvent, useState} from 'react';
import Scoreboard from "./Scoreboard";
import ButtonGroup from "./ButtonGroup";
import s from './counter.module.css'
import SuperButton from "./SuperButton";


type SettingCounterPropsType = {
    minMaxValue: Array<number>
    onChangeCallback: (value: Array<number>) => void
    onClickCallback: ()=>void
}

const SettingCounter = (props: SettingCounterPropsType) => {

    const [error, setError] = useState<boolean>(false)

    const maxChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(+e.target.value)
        if (+e.target.value >= props.minMaxValue[0]) {
            setError(false)
            props.onChangeCallback([props.minMaxValue[0], +e.target.value])
        } else if (+e.target.value <= props.minMaxValue[0]) {
            setError(true)
            error && console.log('ERROR')
        }
    }
    const minChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(+e.target.value)
        if (+e.target.value < props.minMaxValue[1] && +e.target.value > -1) {
            setError(false)
            props.onChangeCallback([+e.target.value, props.minMaxValue[1]])
        } else if (+e.target.value <= props.minMaxValue[0]) {
            setError(true)
            error && console.log('ERROR')
        }
    }

    return (
        <div className={s.counter}>
            {error&& <span>Error</span>}
            <span>max</span><input onChange={maxChangeEventHandler} type="number" value={props.minMaxValue[1]}/>
            <span>max</span><input onChange={minChangeEventHandler} type="number" value={props.minMaxValue[0]}/>
            <SuperButton callback={props.onClickCallback} className={s.buttonStyle} name={'SET'}/>
        </div>
    );
};

export default SettingCounter;