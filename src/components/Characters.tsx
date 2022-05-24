import React from 'react';
import {useActions} from "../hooks/useActions";
import CharacterCard from "./CharacterCard";
import {useTypedSelector} from "../hooks/useTypedSelector";
import { CardMedia, Container, createTheme, Grid, Pagination, ThemeProvider} from "@mui/material";
// @ts-ignore
import img from '../img/main-logo.png'
import CharactersFilter from "./CharactersFilter";

const Characters: React.FC = () => {
    const {setCharactersPage} = useActions()
    const {characters, loading, error, page, totalPagesCount} = useTypedSelector(state => state.characters);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCharactersPage(value);
    };

    // if (loading) {
    //     return <h1>Loading..</h1>
    // }
    //
    // if (error) {
    //     return <h1>Error</h1>
    // }

    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#2B9145'
            },
        },
    });

    return (
        <Container maxWidth="lg">
            <ThemeProvider theme={theme}>
                {/*Header*/}
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: "30px"}}>
                    <CardMedia
                        component="img"
                        sx={{
                            maxHeight: {xs: 600, md: 600},
                            maxWidth: {xs: 600, md: 600},
                        }}
                        alt="Rick and morty"
                        src={img}
                    />
                </div>
                <div>
                    <CharactersFilter/>
                </div>
                {/*Body*/}
                {
                    characters.length > 0 ?
                        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                            {characters.map((character: any) => (
                                <Grid item xs={2} sm={4} md={4} key={character.id}>
                                    <CharacterCard {...character} key={character.id}/>
                                </Grid>
                            ))}
                        </Grid>
                        :
                        'None'
                }
                {/*Footer*/}
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                    <Pagination count={totalPagesCount} page={page} onChange={handleChange} color="primary"
                                size="large"/>
                </div>
            </ThemeProvider>
        </Container>
    );
};

export default Characters;