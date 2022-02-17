

import twitter from "./img/twitter.svg"
import fb from "./img/fb.svg"
import youtube from "./img/youtube.svg"


function Footer () {
    return (<div className="footer-wrapper">
    <footer className="page-footer container">
        <p className="hashtag"> #visitinnsbruck </p>
        <ul className="footer-social">
            <li> <a href="#" className="social-button"> <img src={twitter} alt="twitter" /> </a> </li>
            <li> <a href="#" className="social-button"> <img src={fb} alt="facebook" /> </a> </li>
            <li> <a href="#" className="social-button"> <img src={youtube} alt="youtube" /> </a> </li>
        </ul>
        <p className="copyright"> © 2020 FoxArt</p>
    </footer>
    </div>)
}
export default Footer