import Head from 'next/head'
import Break from '../components/Break'

const Success = () => {
    function redirect() {
        setTimeout(() => {
            location.href="/contact"
         }, 5000)
    }

    return(
        <div onload={redirect()}>
            <Head>
                <title>Success!</title>
            </Head>
            <Break />
            <section class="hero is-fullheight">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Form Successful!
                        </h1>
                        <Break />
                        <h2 class="subtitle">
                            Thank you for contacting us! We will contact you as soon as possible regarding your request!
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Success