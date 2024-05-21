export default function Header(){
    return(
        <div className="header--section">
            <div className="header--section--logo">
                <a href="/"><img src='./img/logo.svg' alt="Logo" /></a>
            </div>
            <div className="header--section--button">
                <button className="btn btn-outline-primary">Try It Free</button>
            </div>
        </div>
    );
}