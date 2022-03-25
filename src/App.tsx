import React, {useEffect, useState} from 'react';

import './App.css';
import Counter from "./components/Counter";
import SettingCounter from "./components/SettingCounter";

function App() {

    const getFromCLocalStorage = () => {
        let localStorageValue = localStorage.getItem("setting")
        localStorageValue && (localStorageValue = JSON.parse(localStorageValue))
        return localStorageValue
        }

    const [renderDisplay,setRenderDisplay] = useState(false)
    const [minMaxValue, setMinMaxValue] = useState<Array<number>>([0,1])
    const [counterValue, setCounterValue] = useState<number>(minMaxValue[0])

    const increment = () => {
        if (counterValue < minMaxValue[1]) setCounterValue(counterValue + 1) // ui не должен контролировать state
    }
    const reset = () => {
        setCounterValue(minMaxValue[0])

    }
    const setInLocalStorage = () => {
        localStorage.setItem("setting", JSON.stringify(minMaxValue))
        setRenderDisplay(false)
        reset()
    }
    useEffect(() => {
        let localStorageValue = localStorage.getItem("setting")
        if (localStorageValue) {
            setCounterValue(JSON.parse(localStorageValue)[0])
            setMinMaxValue(JSON.parse(localStorageValue))
        }
    },[])
    return (
        <div className="App">
            <Counter rendered={renderDisplay}
                     setCounterValue={setCounterValue}
                     increment={increment}
                     reset={reset}
                     valueCounter={counterValue}
                     minMaxValue={minMaxValue}/>

            <SettingCounter changeRendered={setRenderDisplay}
                            onClickCallback={setInLocalStorage}
                            onChangeCallback={setMinMaxValue}
                            minMaxValue={minMaxValue}/>
        </div>
    );
}

export default App;
