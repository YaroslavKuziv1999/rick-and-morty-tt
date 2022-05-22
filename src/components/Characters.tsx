import React, {useEffect} from 'react';
import {useActions} from "../hooks/useActions";
import CharacterCard from "./CharacterCard";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Box, Container, createTheme, Grid, Pagination, ThemeProvider} from "@mui/material";
// @ts-ignore
import img from '../img/main-logo.png'

const Characters: React.FC = () => {
    const {fetchCharacters} = useActions()
    const {characters} = useTypedSelector(state => state.characters);
    console.log('Prop', characters);

    useEffect(() => {
        fetchCharacters()
    }, [])

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
                    <Box
                        component="img"
                        sx={{
                            maxHeight: {xs: 450, md: 450},
                            maxWidth: {xs: 450, md: 450},
                        }}
                        alt="The house from the offer."
                        src={img}
                    />
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
                    <Pagination count={10} color="primary" size="large"/>
                </div>
            </ThemeProvider>
        </Container>
    );
};

export default Characters;