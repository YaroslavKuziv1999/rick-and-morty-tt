import React from 'react';
import {useActions} from "../hooks/useActions";
import CharacterCard from "./CharacterCard";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Grid, Pagination} from "@mui/material";
// @ts-ignore
import img from '../img/main-logo.png'
import Header from "./Header";

const Characters: React.FC = () => {
    const {setCharactersPage} = useActions()
    const {characters, page, totalPagesCount} = useTypedSelector(state => state.characters);

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

    return (
        <div>
            {/*Header*/}
            <Header filter={true}/>
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
                <Pagination count={totalPagesCount} page={page} onChange={handleChange} color="primary" size="large"/>
            </div>
        </div>
    );
};

export default Characters;