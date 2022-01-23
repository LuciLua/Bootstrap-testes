import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    )
}

export default App