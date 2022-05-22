import React from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";

const CharacterCard = (props: any): any => {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                height="140"
                image={props.image}
                alt={props.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.status}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default CharacterCard;