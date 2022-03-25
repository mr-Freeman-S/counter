import React, {ChangeEvent, useState} from 'react';
import ButtonGroup from "./ButtonGroup";
import s from './counter.module.css'
import SuperButton from "./SuperButton";


type SettingCounterPropsType = {
    minMaxValue: Array<number>
    onChangeCallback: (value: Array<number>) => void
    onClickCallback: () => void
    changeRendered: (state: boolean) => void
}

const SettingCounter = (props: SettingCounterPropsType) => {

    const [error, setError] = useState<boolean>(false)

    const maxChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeRendered(true)
        Number(e.target.value) > props.minMaxValue[0] ? setError(false) : setError(true)
        Number(e.target.value) > props.minMaxValue[0] && props.onChangeCallback([props.minMaxValue[0], Number(e.target.value)])
    }
    const minChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeRendered(true);
        if (Number(e.target.value) < props.minMaxValue[1] && Number(e.target.value)>= 0) {
            setError(false)
            props.onChangeCallback([Number(e.target.value),props.minMaxValue[1]])
        }   else setError(true)
    }
    let maxClassname = ``
    let minClassname = ``
    return (
        <div className={s.counter}>
            {error && <span>Error</span>}
            <span>max</span><input className={s.inp} onChange={maxChangeEventHandler} type="number"
                                   value={props.minMaxValue[1]}/>
            <span>min</span><input className={s.inp} onChange={minChangeEventHandler} type="number"
                                   value={props.minMaxValue[0]}/>
            <SuperButton callback={props.onClickCallback} className={s.buttonStyle} name={'SET'}/>
        </div>
    );
};

export default SettingCounter;