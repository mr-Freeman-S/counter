import React from 'react';
import SuperButton from "./SuperButton";
import s from './counter.module.css'

type ButtonGroupPropsType = {
    valueCounter: number
    increment: () => void
    reset: () => void
    setCounterValue: (n: number) => void
}
const ButtonGroup = (props: ButtonGroupPropsType) => {

        const addToLocalStorage = () => {
            localStorage.setItem("countValue", JSON.stringify(props.valueCounter))
        }
        const getToLocalStorage = () => {
            let value = localStorage.getItem("countValue")
            if (value) {
                let newValue = JSON.parse(value)
                props.setCounterValue(newValue)
            }
        }
        const clearToLocalStorage = () => {
            localStorage.clear()

        }
        const deleteToLocalStorage = () => {
            localStorage.removeItem('countValue')
        }
        return (
            <div className={s.buttonGropeStyle}>
                <SuperButton className={s.buttonStyle} disabled={props.valueCounter > 4} callback={props.increment}
                             name='INC'/>
                <SuperButton className={s.buttonStyle} disabled={!props.valueCounter} callback={props.reset} name='RESET'/>

            </div>
        );
    }
;

export default ButtonGroup;