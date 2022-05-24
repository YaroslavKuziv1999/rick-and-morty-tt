import React from 'react';
import Typography from "@mui/material/Typography";

const ErrorMessage = (props: any) => {
    return (
        <Typography sx={{
            textAlign: 'center', color: 'red', fontSize: "25px", textTransform: 'uppercase',
            fontFamily: "Roboto"
        }}>
            {props.error}
        </Typography>
    );
};

export default ErrorMessage;