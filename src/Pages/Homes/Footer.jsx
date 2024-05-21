import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";

export default function Footer(){
    return(
        <div className="footer--section">
            <div className="border-image-top"></div>
            <div className="footer--section__content">
                <img src="./img/logo.svg" alt="Footer logo" className="footer-logo"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
                    vestibulum a, ultrices quis sem.</p>
                    <div className="footer--section__content-info">
                        <div className="phone">
                            <img src="./img/icon-phone.svg" alt="Phone" />  Phone: +1-543-123-4567
                        </div>
                        <div className="email">
                            <img src="./img/icon-email.svg" alt="Email" />  example@huddle.com
                        </div>
                    </div>
                    <div className="footer--section__content-social">
                        <a href="#"><FaSquareFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaSquareTwitter /></a>
                    </div>
            </div>
            <div className="footer--section__newsletter">
                <h2>Newsletter</h2>
                <p> To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
                    send you spam or pass on your email address</p>
                <div className="footer--section__newsletter-form">
                    <input type="text" />
                    <button className="btn btn-subscribe">Subscribe</button>
                </div>
            </div>
        </div>
    );
}