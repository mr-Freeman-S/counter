import React, {useState} from 'react';

import './App.css';
import Counter from "./components/Counter";
import SettingCounter from "./components/SettingCounter";

function App() {
    const getFromCLocalStorage = () => {
        if (localStorage.getItem("setting") !== null) {
            // @ts-ignore
            return setMinMaxValue(JSON.parse(localStorage.getItem("setting")))
        } else return setMinMaxValue([0,1])
    }
    const [minMaxValue, setMinMaxValue] = useState<Array<number>>([0,1])
    const [counterValue, setCounterValue] = useState<number>(minMaxValue[0])
    const setInLocalStorage = () => {
        localStorage.setItem("setting", JSON.stringify(minMaxValue))
    }

    const increment = () => {
        if (counterValue < minMaxValue[1]) setCounterValue(counterValue + 1) // ui не должен контролировать state
    }
    const reset = () => {
        setCounterValue(minMaxValue[0])
    }


    return (
        <div className="App">
            <Counter setCounterValue={() => {
            }} increment={increment} reset={reset} valueCounter={counterValue}/>
            <SettingCounter onClickCallback={setInLocalStorage} onChangeCallback={setMinMaxValue}
                            minMaxValue={minMaxValue}/>
        </div>
    );
}

export default App;
