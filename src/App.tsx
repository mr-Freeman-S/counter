import React, {useState} from 'react';

import './App.css';
import Counter from "./components/Counter";
import SettingCounter from "./components/SettingCounter";

function App() {

    const [counterValue, setCounterValue] = useState<number>(0)
    const [minMaxValue, setMinMaxValue] = useState([0,1])

    const increment = () => {
        if (counterValue < 5) setCounterValue(counterValue + 1) // ui не должен контролировать state
    }
    const reset = () => {
        setCounterValue(0)
    }


    return (
        <div className="App">
            <Counter setCounterValue={()=>{}} increment={increment} reset={reset} valueCounter={counterValue}/>
            <SettingCounter onChangeCallback={setMinMaxValue} minMaxValue={minMaxValue}/>
        </div>
    );
}

export default App;
