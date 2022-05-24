import React from 'react';
import Characters from "./components/Characters";
import './styles/style.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import WatchList from "./components/WatchList";
import {Container, createTheme, ThemeProvider} from "@mui/material";

const App = () => {
    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#2B9145'
            },
        },
    });
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Container maxWidth="lg">
                    <ThemeProvider theme={theme}><Characters/></ThemeProvider></Container>}/>
                <Route path="/watchlist" element={
                    <Container maxWidth="lg">
                        <ThemeProvider theme={theme}><WatchList/></ThemeProvider></Container>}/>
            </Routes>
        </Router>
    )
}

export default App;