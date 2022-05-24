import * as React from 'react';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {Box, CardMedia} from "@mui/material";

const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const {children, onClose, ...other} = props;

    return (
        <DialogTitle component={'div'} sx={{mb: 4, p: 2}} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

export default function PopupDialog(props: any) {
    return (
        <div>
            <Button size="small" onClick={props.setOpenModal}>Learn More</Button>
            <BootstrapDialog
                onClose={props.setCloseModal}
                aria-labelledby="customized-dialog-title"
                open={props.openState}
                fullWidth
                maxWidth={'sm'}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={props.setCloseModal}/>
                <DialogContent>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <CardMedia
                            component="img"
                            src={props.image}
                            alt={props.name}
                            sx={{borderRadius: '50%', width: "50%", minWidth: 150}}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                px: 1,
                                my: 'auto'
                            }}
                        >
                            <Typography sx={{display: "flex", fontSize: '36px', pb: 1}}
                                        variant={'h4'}>
                                {props.name}
                            </Typography>
                            <Typography variant={'h5'}>
                                Gender
                                <Typography sx={{display: "flex", fontSize: 'small', textTransform: 'capitalize'}}
                                            color="text.secondary"
                                            component={'p'}
                                            variant={'body2'}>
                                    {props.gender}
                                </Typography>
                            </Typography>
                            <Typography variant={'h5'}>
                                Species
                                <Typography sx={{display: "flex", fontSize: 'small', textTransform: 'capitalize'}}
                                            color="text.secondary"
                                            component={'p'}
                                            variant={'body2'}>
                                    {props.species}
                                </Typography>
                            </Typography>
                            <Typography variant={'h5'}>
                                Location
                                <Typography sx={{display: "flex", fontSize: 'small', textTransform: 'capitalize'}}
                                            color="text.secondary"
                                            component={'p'}
                                            variant={'body2'}>
                                    {props.location.name}
                                </Typography>
                            </Typography>
                            <Typography variant={'h5'}>
                                Status
                                <Typography sx={{display: "flex", fontSize: 'small', textTransform: 'capitalize'}}
                                            color="text.secondary"
                                            component={'p'}
                                            variant={'body2'}>
                                    {props.status}
                                </Typography>
                            </Typography>
                        </Box>
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={props.setCloseModal}>
                        OK
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
