import globals from '../styles/globals.css'
import bulma from '../styles/bulma.css'
import fontawesome from '../styles/fontawesome.css'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta description="This is the official webpage for jroapps.tech." />
                
                <script src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>

                <link rel="icon" href="/icons/favicon.ico" />
            </Head>
            <header>
                <NavBar />
            </header>
            <Component {...pageProps} />
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default App
