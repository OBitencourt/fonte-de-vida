

import React from 'react';
import propTypes from 'prop-types'
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import {CssBaseline} from '@mui/material';
import theme from '../src/theme';
import { AppProps } from 'next/app';


export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props

    return (
        <React.Fragment>
            <Head>
                <title>Fonte de Vida</title>
                <link rel="icon" href="/images/barber-beauty-salon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Quicksand:wght@300..700&display=swap" rel="stylesheet" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>           
        </React.Fragment>
    )
}

MyApp.propTypes = {
    Component: propTypes.elementType.isRequired,
    pageProps: propTypes.object.isRequired
}