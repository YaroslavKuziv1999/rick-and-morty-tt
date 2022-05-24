import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {useActions} from "../../hooks/useActions";
import ErrorMessage from "../ErrorMessage";

export default function SeriesList(props: any) {
    const [checked, setChecked] = React.useState([0]);

    const {deleteFromWatchList, checkSeriesFromWatchList} = useActions()

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


    if (Object.keys(props).length !== 0 && props.list.length>0) {
        return (
            <List sx={{width: '100%'}}>
                {props.list.map((series: any) => {
                    const labelId = `checkbox-list-label-${series.value}`;

                    return (
                        <ListItem
                            onClick={() => checkSeriesFromWatchList(series.id)}
                            sx={{
                                color: '#2B9145',
                                textDecoration: checked.includes(series.value) ? 'line-through' : 'none'
                            }}
                            key={series.id}
                            secondaryAction={
                                <IconButton onClick={() => deleteFromWatchList(series.id)} edge="end"
                                            aria-label="delete">
                                    <DeleteIcon sx={{color: 'red'}}/>
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(series.value)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(series.value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{'aria-labelledby': labelId}}
                                    />
                                </ListItemIcon>
                                <ListItemText sx={{color: 'white'}} id={labelId} primary={series.value}/>
                            </ListItemButton>
                        </ListItem>

                    );
                })}
            </List>
        );
    } else {
        return (
            <ErrorMessage error="No series was added! Pls, enter the series."/>
        )
    }
}
