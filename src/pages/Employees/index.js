import React from 'react';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Employees from './Employees';
import Layout from '../../components/Layout';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#333996",
            light: '#3c44b126'
        },
        secondary: {
            main: "#f83245",
            light: '#f8324526'
        },
        background: {
            default: "#f4f5fd"
        },
    },
    overrides: {
        MuiAppBar: {
            root: {
                transform: 'translateZ(0)'
            }
        }
    },
    props: {
        MuiIconButton: {
            disableRipple: true
        }
    }
})


const useStyles = makeStyles({
    appMain: {
        // paddingLeft: '250px',
        // width: '100%'
    }
})

export default function Employee() {
    const classes = useStyles();

    return (
        <Layout>
            <ThemeProvider theme={theme}>
                <div className={classes.appMain}>
                    <Employees />
                </div>
                <CssBaseline />
            </ThemeProvider>
        </Layout>
    );
}


