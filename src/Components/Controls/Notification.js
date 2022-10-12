import React from 'react';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(6)
    }
}));

export default function Notification(props) {
    const { notify, setNotify } = props;
    const classes = useStyles();

    const handleClose = (event, reason) => {
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}
        >
            <Alert severity={notify.type}
                onClose={handleClose}
            >
                {notify.message}
            </Alert>
        </Snackbar>
    )
}
