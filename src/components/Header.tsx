import React from 'react';
import {Link} from "react-router-dom";
import {Box, CardMedia} from "@mui/material";
// @ts-ignore
import img from "../assets/img/main-logo.png";
import NavBar from "./NavBar";
import CharactersFilter from "./Characters/CharactersFilter";
import {useActions} from "../hooks/useActions";

const Header = (props: any) => {
    const {fetchCharacters} = useActions()
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: "30px",
                cursor: "pointer",
            }}>
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
            <Box sx={{
                display: "flex",
                justifyContent: props.filter ? "space-between" : 'center',
                mt: props.filter ? 0 : 6
            }}>
                <NavBar/>
                {props.filter && <CharactersFilter/>}
            </Box>
        </div>
    );
};

export default Header;