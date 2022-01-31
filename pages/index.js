import Head from 'next/head'
import Break from '../components/Break'
import Link from 'next/link'

const Home = () => {
    return (
        <>
            <Head>
                <title>jroapps.tech</title>
            </Head>
            <Break />
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                    <img src="https://i.imgur.com/tONgVea.png" alt="logo"/>
                    <Break />
                        <h1 className="title"><i className="fas fa-rocket fa-2x"></i>&nbsp;&nbsp;I offer the creation and deployment of both websites and Apple and/or Android mobile apps!</h1>
                    </div>    
                </div>     
            </section>

            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <Link href="/pricing">
                                <a className="column is-half">
                                    <div className="card">
                                        <header className="card-header">
                                            <p className="card-header-title">
                                                Website Development
                                            </p>
                                        </header>
                                        <div className="card-content">
                                            <div className="content">
                                                I design and develop custom websites primarily through the use of HTML, CSS, and JavaScript. I utilize popular custom elements to build a website to meet your organizational needs. I also utilize popular content manangement service options such as WordPress or Weebly if that fits you better. See the pricing page by clicking <u>here</u> for information about website development pricing.<br/>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            <Link href="/pricing">
                                <a className="column is-half">
                                    <div className="card">
                                        <header className="card-header">
                                            <p className="card-header-title">
                                                Android & Apple Mobile Apps
                                            </p>
                                        </header>
                                        <div className="card-content">
                                            <div className="content">
                                                I develop both Android and Apple apps for deployment to the Google Play Store and/or the Apple App Store. I have developed and published several apps on the Google Play Store and have just now begun deploying on the Apple App Store. Click <u>here</u> to see pricing information for mobile development packages I offer. For examples of the apps I've developed, click the buttons below.<br/>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <a href='https://play.google.com/store/search?q=jroapps.tech&26pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img src='../img/google.png' style={{width: 300}}alt="Google Play"/></a>
                        </div>

                        <div className="column">
                            <a href="https://apps.apple.com/us/developer/justin-owens/id1549908448?itsct=apps_box&amp;itscg=30200"><img src="/img/apple.png" style={{width: 300}} alt="Apple Store"/></a>
                        </div>
                    </div>
                </div> 
            </section>
        </>
    )
}

export default Home
