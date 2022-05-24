import React from 'react';
import {Link} from "react-router-dom";
import {CardMedia} from "@mui/material";
// @ts-ignore
import img from "../img/main-logo.png";
import NavBar from "./NavBar";
import CharactersFilter from "./CharactersFilter";
import {useActions} from "../hooks/useActions";

const Header = (props: any) => {
    const {fetchCharacters} = useActions()
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: "30px", cursor: "pointer"}}>
                <Link to="/">
                    <CardMedia
                        onClick={() => fetchCharacters(1)}
                        component="img"
                        sx={{
                            maxHeight: {xs: 600, md: 600},
                            maxWidth: {xs: 600, md: 600},
                        }}
                        alt="Rick and morty"
                        src={img}
                    />
                </Link>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <NavBar/>
                {props.filter && <CharactersFilter/>}
            </div>
        </div>
    );
};

export default Header;