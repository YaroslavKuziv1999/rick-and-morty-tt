import React from 'react';
import {useActions} from "../../hooks/useActions";
import CharacterCard from "./CharacterCard";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Grid, Pagination} from "@mui/material";
// @ts-ignore
import img from '../../assets/img/main-logo.png';
import Header from "../Header";
import ErrorMessage from "../ErrorMessage";

const Characters: React.FC = () => {
    const {setCharactersPage} = useActions()
    const {characters, page, totalPagesCount} = useTypedSelector(state => state.characters);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCharactersPage(value);
    };

    return (
        <div>
            {/*Header*/}
            <Header filter={true}/>
            {/*Body*/}
            {
                characters.length > 0 ?
                    <div>
                        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                            {characters.map((character: any) => (
                                <Grid item xs={2} sm={4} md={4} key={character.id}>
                                    <CharacterCard {...character} key={character.id}/>
                                </Grid>
                            ))}
                        </Grid>
                        {/*Footer*/}
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                            <Pagination count={totalPagesCount} page={page} onChange={handleChange} color="primary"
                                        size="large"/>
                        </div>
                    </div>

                    :
                    <ErrorMessage error="No characters was found! Maybe some problems with the server."/>
            }

        </div>
    );
};

export default Characters;