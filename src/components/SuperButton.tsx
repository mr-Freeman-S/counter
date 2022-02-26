import React, {DetailedHTMLProps, ButtonHTMLAttributes} from 'react';
import s from './counter.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    callback?: () => void
    className?: string
    name?:string


}

const SuperButton = (props:SuperButtonPropsType) => {
    const finalClassName:string = `${props.className && props.className}`

    return (
        <button className={finalClassName}  disabled={props.disabled} onClick={props.callback}>
            {props.name}
        </button>
    );
};

export default SuperButton;