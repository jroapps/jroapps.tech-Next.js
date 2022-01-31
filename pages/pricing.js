import Head from 'next/head'
import Break from '../components/Break'

const Pricing = () => {
    return(
        <>
            <Head>
                <title>Contact Me</title>
            </Head>
            <Break />
            <section class="hero">
                <div class="hero-body">
                    <h1 class="title">
                    Pricing
                    </h1>
                    <p></p>
                    <h2 class="subtitle">
                    Listed below are prices for the services that I provide. Contact me for a free consultation and let's get started making your web or mobile project!
                    </h2><br/>

                    <div class="container">
                        <div class="columns">
                            <div class="column">
                                <div class="card">
                                    <header class="card-header">
                                        <p class="card-header-title">
                                        Website Development
                                        </p>
                                    </header>
                                    <div class="card-content">
                                        <div class="content">
                                            <h3>Free initial consultation!</h3>
                                            <h3>$150 for the first page or for a single page site.</h3>
                                            <h3>$100 for every other page up to a 20 page maximum.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="column">
                                <div class="card">
                                    <header class="card-header">
                                        <p class="card-header-title">
                                        App Starter Package
                                        </p>
                                    </header>
                                    <div class="card-content">
                                        <div class="content">
                                            <h3>Free initial consultation!</h3>
                                            <h3>$500 per platform (Android and/or Apple)</h3>
                                            <h3>Deployment to the app stores</h3>
                                            <h3>Simple 3 page app with tab navigation</h3>
                                            <h3>One major feature integration</h3>
                                            <h3>$100 per platform per feature for 1 additional feature</h3>
                                            <h3>$50 per platform to publish updated content</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="column">
                                <div class="card">
                                    <header class="card-header">
                                        <p class="card-header-title">
                                        App Basic Package
                                        </p>
                                    </header>
                                    <div class="card-content">
                                        <div class="content">
                                            <h3>Free initial consultation!</h3>
                                            <h3>$1,000 per platform (Android and/or Apple)</h3>
                                            <h3>Deployment to the app stores</h3>
                                            <h3>Five pages with option for side menu navigation</h3>
                                            <h3>Up to 3 major features integrations</h3>
                                            <h3>$100 per platform per feature for up to 2 additional features</h3>
                                            <h3>Google AdMob integration</h3>
                                            <h3>$150 per platform to publish updated content</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="column">
                                <div class="card">
                                    <header class="card-header">
                                        <p class="card-header-title">
                                        App Pro Package
                                        </p>
                                    </header>
                                    <div class="card-content">
                                        <div class="content">
                                            <h3>Free initial consultation!</h3>
                                            <h3>$2,000 per platform (Android and/or Apple)</h3>
                                            <h3>Deployment to the app stores</h3>
                                            <h3>Up to 10 pages with any navigation option</h3>
                                            <h3>Up to 6 major feature integrations</h3>
                                            <h3>$100 per platform per feature for additional features</h3>
                                            <h3>Google AdMob integration</h3>
                                            <h3>$300 per platform to publish updated content.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing