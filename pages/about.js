import Head from 'next/head'
import Break from '../components/Break'

const About = () => {
    return(
        <>
            <Head>
                <title>About</title>
            </Head>
            <Break />
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            About Me
                        </h1>
                        <br/>
                        <h2 className="subtitle">
                            I am a website and mobile app developer that strives to make web and mobile app development accessible to everyone. My goal is to provide quality websites either through a content management system or with custom HTML to deploy to your domain. Further, my goal is to provide user-friendly mobile app development and design for a wide range of customer needs to deploy on the Google Play Store and/or the Apple App Store.
                        </h2>
                        <h2 className="subtitle">
                            My name is Justin Owens and I have been developing for the web since the early 2000s and have been deploying mobile apps since 2019. I have designed multiple websites and managed content management systems as well as deployed a number of mobile apps to the Google Play Store and the Apple App Store. I am passionate about designing quality user-friendly websites and mobile apps.
                        </h2>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                    <img src="/img/pic.jpg" alt="Justin Owens family"/>
                                    </figure>
                                </div> 
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                            <img src="https://i.imgur.com/bIr3R3N.jpg" alt="Justin Owens family"/>
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4">Justin Owens</p>
                                            <p className="subtitle is-6"><a className="mylink" href="mailto:justin@jroapps.tech"><u>Email Justin</u></a></p>
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

export default About