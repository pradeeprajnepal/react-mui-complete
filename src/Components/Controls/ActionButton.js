import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {

        margin: "2px !important",
        minWidth: "0",
    },

}))

export default function ActionButton(props) {
    const classes = useStyles();
    const { color, variant, children, onClick } = props;
    return (
        <Button
            variant={variant}
            className={classes.root}
            color={color}
            onClick={onClick}

        >
            {children}
        </Button>
    )
}
