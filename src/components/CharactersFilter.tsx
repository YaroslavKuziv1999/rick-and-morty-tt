import React, {useEffect} from 'react';
import {Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {charactersFilterBy} from "../types/characters";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const CharactersFilter = () => {
    const [filter, setFilter] = React.useState('');
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const {page} = useTypedSelector(state => state.characters);
    const {fetchCharacters} = useActions();

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        filter && value ? fetchCharacters(page, filter, value) : fetchCharacters(page);
    }, [page])

    const handleChangeSelect = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            if (filter && value) {
                setError(false);
                fetchCharacters(page, filter, value)
            } else {
                setError(true);
                fetchCharacters(page);
            }
        }
    }

    const handleSearch = () => {
        if (filter && value) {
            setError(false);
            fetchCharacters(page, filter, value)
        } else {
            setError(true);
            fetchCharacters(page);
        }
    }

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            <FormControl sx={{mr: 2, minWidth: 120, mb: 2}}>
                <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    error={error}
                    label="Filter by"
                    onChange={handleChangeSelect}
                >
                    <MenuItem value={charactersFilterBy.SPECIES}>{charactersFilterBy.SPECIES}</MenuItem>
                    <MenuItem value={charactersFilterBy.GENDER}>{charactersFilterBy.GENDER}</MenuItem>
                    <MenuItem value={charactersFilterBy.STATUS}>{charactersFilterBy.STATUS}</MenuItem>
                </Select>
            </FormControl>
            <TextField error={error} helperText={error ? 'Choose filter and fill the search field!' : ''} sx={{mr: 2, mb: 2}} id="outlined-basic"
                       label="Search..." variant="outlined" onKeyDown={handleKeyDown}
                       onChange={handleChangeInput}/>
            <Button sx={{height: 56, mb: 2}} onClick={handleSearch} variant="contained" size="medium" color="success">
                Search
            </Button>
        </Box>
    );
};

export default CharactersFilter;