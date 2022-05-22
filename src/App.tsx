import React from 'react';
import Characters from "./components/Characters";
import './styles/global.css'

const App = () => {
    return (
        <div style={{backgroundColor: "rgb(36, 40, 47)"}}>
            <Characters/>
        </div>
    );
};

export default App;