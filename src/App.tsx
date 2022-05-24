import React from 'react';
import Characters from "./components/Characters";
import './styles/style.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Characters/>} />
                    <Route path="/watchlist">
                        Test
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;