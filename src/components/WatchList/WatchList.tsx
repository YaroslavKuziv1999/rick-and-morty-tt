import React from 'react';
import Header from "../Header";
import {Box, Button, TextField} from "@mui/material";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import SeriesList from "./SeriesList";
import cuid from "cuid";


const WatchList = () => {
    const [value, setValue] = React.useState({id: '', value: '', done: false});
    const {addToWatchList} = useActions();
    const {watchList} = useTypedSelector(state => state.watchList);
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue({id: cuid(), value: event.target.value, done: false});
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            addToWatchList(value)
        }
    }

    return (
        <div>
            <Header filter={false}/>
            <Box sx={{display: 'flex', mt: 3}}>
                <TextField sx={{mr: 2, mb: 2}} fullWidth id="outlined-basic" label="Enter series..." variant="outlined"
                           onKeyDown={handleKeyDown}
                           onChange={handleChangeInput}/>
                <Button sx={{height: 56, mb: 2}} variant="contained" onClick={() => addToWatchList(value)}>Add</Button>
            </Box>
            <SeriesList list={watchList}/>
        </div>
    );
};

export default WatchList;