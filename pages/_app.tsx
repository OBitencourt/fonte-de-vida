

import React from 'react';
import propTypes from 'prop-types'
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import {CssBaseline} from '@mui/material';
import theme from '../src/theme';
import { AppProps } from 'next/app';
import TemplateDefault from '../src/templates/Default'

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props

    return (
        <React.Fragment>
            <Head>
                <title>Fonte de Vida</title>
                <link rel="icon" href="/images/barber-beauty-salon.ico" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <TemplateDefault>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </TemplateDefault>
        </React.Fragment>
    )
}

MyApp.propTypes = {
    Component: propTypes.elementType.isRequired,
    pageProps: propTypes.object.isRequired
}