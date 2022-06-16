import { useState } from "react";

const Input = () => {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const handleOnChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubtractValue = () => {
        if (input)
            setCount(count - parseInt(input, 10));
    }

    const handleAddValue = () => {
        if (input)
            setCount(count + parseInt(input, 10));
    }

    return (<section className="input">
        <div>
            <input type="text" value={input} onChange={handleOnChange} name="" id="" />
            <div className="button">
                <button onClick={handleSubtractValue}>Ausgaben</button>
                <button onClick={handleAddValue}>Einnahmen</button>
            </div>
            {/* <button onClick={() => setCount(count + 1)}>Einnahmen</button> */}
            <p>Kontostand:{count}€</p>
            {/* <button onClick={() => setCount(count - 1)}>Ausgaben</button>
        <button onClick={() => setCount(count - count)}>Reset</button> */}
        </div>
    </section>);
}

export default Input;