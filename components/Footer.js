const Footer = () => {

    // Get year dynamically
    const year = () => {
        var date = new Date().getFullYear();
        return date;
    }

    return (
        <footer className="myfooter">
            <div className="content has-text-centered">
                <p></p>
                <p>
                    &copy; {year()} jroapps.tech | All Rights Reserved
                </p>
                {/* For future addition below */}
                {/* <p>
                    <a class="facebook" href="https://www.facebook.com">
                    <i class="fab fa-facebook-square"></i>
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a class="twitter" href="https://www.twitter.com">
                    <i class="fab fa-twitter-square"></i>
                    </a>
                </p> */}
            </div>
        </footer>
    )
}

export default Footer