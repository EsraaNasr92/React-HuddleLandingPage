export default function Counter(){
    return(
        <div className="counter--section">
            <div className="counter-section-image">
                <img src="./img/screen-mockups.svg" alt="screen mockups" />
            </div>
            <div className="counter-section-counter">
                <div className="counter-section-counter__communities">
                    <img src="./img/icon-communities.svg" alt="icon-communities" />
                    <h1>1.4k+</h1>
                    <h4>Communities Formed</h4>
                </div>
                <div className="counter-section-counter__message">
                    <img src="./img/icon-messages.svg" alt="icon-communities" />
                    <h1>2.7m+</h1>
                    <h4>Messages Sent</h4>
                </div>
            </div>
        </div>
    );
}