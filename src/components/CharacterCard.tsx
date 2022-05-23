import React from 'react';
import {Card, CardActions, CardContent, Tooltip, Typography} from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const getStatusIcon = (status: any) => {
    switch (status) {
        case 'Alive':
            return <CheckIcon color='success'/>;
        case 'Dead':
            return <CloseIcon color='error'/>;
        case 'unknown':
            return <QuestionMarkIcon color='warning'/>;
    }
}

const CharacterCard = (props: any): any => {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                image={props.image}
                alt={props.name}
            />
            <CardContent>
                <Typography sx={{display: "flex", alignItems: 'center', textTransform: 'capitalize'}} component={'div'}>
                    <Typography sx={{display: "flex", alignItems: 'start', flexDirection: 'column'}} variant={'h5'}>
                        {props.name}
                        <Tooltip title="Gender" placement="bottom">
                            <Typography sx={{display: "flex", fontSize: 'small'}} color="text.secondary" component={'p'}
                                        variant={'body2'}>
                                {props.gender}
                            </Typography>
                        </Tooltip>
                    </Typography>
                    <Tooltip title="Status" placement="bottom">
                        <Typography sx={{
                            display: "flex",
                            marginLeft: 'auto',
                            alignItems: 'center'
                        }} variant="body2" color="text.secondary">
                            {getStatusIcon(props.status)}{props.status}
                        </Typography>
                    </Tooltip>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default CharacterCard;