import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Controls } from './Controls';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogTitle: {
        justifyContent: 'center !important'
    },
    dialogAction: {
        justifyContent: 'center !important'
    },
}))

export default function ConfirmDialog(props) {

    const { confirmDialog, setConfirmDialog } = props;
    const classes = useStyles();

    return (
        <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
            <DialogTitle className={classes.dialogTitle}>
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
            </DialogTitle>

            <DialogContent className={classes.dialogContent}>

                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>

            <DialogActions className={classes.dialogAction}>
                <Controls.Button
                    text="No"
                    color="info"
                    onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
                />
                <Controls.Button
                    text="Yes"
                    color="secondary"
                    onClick={confirmDialog.onConfirm}
                />

            </DialogActions>
        </Dialog>
    )
}
