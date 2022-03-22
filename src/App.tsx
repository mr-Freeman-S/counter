import React, {useState} from 'react';

import './App.css';
import Counter from "./components/Counter";

function App() {

    const [counterValue, setCounterValue] = useState<number>(0)

    const increment = () => {
        if (counterValue < 5) setCounterValue(counterValue + 1) // ui не должен контролировать state
    }
    const reset = () => {
        setCounterValue(0)
    }

    return (
        <div className="App">
            <Counter increment={increment} reset={reset} valueCounter={counterValue}/>
            <Counter increment={increment} reset={reset} valueCounter={counterValue}/>
        </div>
    );
}

export default App;
