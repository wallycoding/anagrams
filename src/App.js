import React, { useState } from 'react';
import { anagrams, posibilites, repeats } from './tools';
function App() {

    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    const generate = () => {
        setList([]);
        const result = anagrams(text);
        repeats(result);
        setList(result);
    }

    return (
        <div className="container">
            <main>
                <div className="form">
                    <div className="info">
                        <span>Posibilidades: {posibilites(text)}</span>
                        <span>Repetições: {repeats(text)}</span>
                    </div>
                    <div className="input-box">
                        <input
                            maxLength={8}
                            placeholder="Texto..."
                            value={text}
                            onChange={({ target: { value } }) => {
                                if (list.length !== 0) {
                                    setList([]);
                                }
                                setText(value)
                            }}
                        />
                        <button onClick={generate}>Gerar</button>
                    </div>
                </div>
                <div className="results">
                    {
                        list.map((text, i) => (
                            <span key={i}>{text}</span>
                        ))
                    }
                </div>
            </main>
        </div>
    );
}

export default App;
