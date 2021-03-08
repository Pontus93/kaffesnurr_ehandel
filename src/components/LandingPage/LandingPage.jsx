import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from 'react-bootstrap';
import useStyles from './styles';

const LandingPage = () => {
    const classes = useStyles();

    return (
        <main className={classes.main} >
            <Button>LANDING PAGE IS UNDER CONSTRUCTION</Button>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4} >
            </Grid>
        </main>
    );
};


export default LandingPage;