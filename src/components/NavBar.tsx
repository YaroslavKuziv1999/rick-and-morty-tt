import React from 'react';
import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import '../styles/style.css'

const NavBar = () => {
    return (
        <Box sx={{display:"flex", flexWrap: 'wrap', alignItems: 'center'}}>
            <Link to="/" className="navBarText" style={{marginRight: 20}}>
                Characters
            </Link>
            <Link to="/watchlist" className="navBarText">
                WatchList
            </Link>
        </Box>
    );
};

export default NavBar;