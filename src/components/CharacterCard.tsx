import React, {useState} from 'react';
import {Card, CardActions, CardContent, Tooltip, Typography} from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import PopupDialog from "./PopupDialog";

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
    const [open, setOpen] = useState(false)

    function onCloseModal() {
        setOpen(false);
    }

    const onOpenModal = () => {
        setOpen(true);
    }

    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                image={props.image}
                alt={props.name}
            />
            <CardContent>
                <Typography sx={{display: "flex", alignItems: 'center', textTransform: 'capitalize'}}
                            component={'div'}>
                    <Typography sx={{display: "flex", alignItems: 'start', flexDirection: 'column'}} variant={'h5'}>
                        {props.name}
                        <Tooltip title="Gender" placement="bottom">
                            <Typography sx={{display: "flex", fontSize: 'small'}} color="text.secondary"
                                        component={'p'}
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
                <PopupDialog setCloseModal={onCloseModal} setOpenModal={onOpenModal} openState={open} {...props}/>
            </CardActions>
        </Card>
    );
};

export default CharacterCard;