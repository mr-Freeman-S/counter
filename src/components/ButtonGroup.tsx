import React from 'react';
import SuperButton from "./SuperButton";
import s from './counter.module.css'

type ButtonGroupPropsType = {
    valueCounter:number
    increment:()=>void
    reset:()=>void
}

const ButtonGroup = (props:ButtonGroupPropsType) => {
    return (
        <div className={s.buttonGropeStyle}>
            <SuperButton className={s.buttonStyle} disabled={props.valueCounter> 4} callback={props.increment} name='INC'/>
            <SuperButton className={s.buttonStyle} disabled={!props.valueCounter} callback={props.reset} name='RESET' />
        </div>
    );
};

export default ButtonGroup;