import { useEffect, useRef, useState } from "react";

export default function Counter() {
    const [countCommunities, setCountCommunities] = useState(0);
    const [countMessage, setCountMessage] = useState(0);
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const animateCounters = () => {
        let startCommunities = 0;
        const endCommunities = 150;

        let startMessages = 0;
        const endMessages = 70;

        const duration = 2000; // Duration of the animation in milliseconds
        const incrementCommunities = endCommunities / (duration / 100); // Calculate increment per 100ms
        const incrementMessages = endMessages / (duration / 100);

        const counter = setInterval(() => {
            startCommunities += incrementCommunities;
            startMessages += incrementMessages;

            if (startCommunities >= endCommunities || startMessages >= endMessages) {
                setCountCommunities(endCommunities);
                setCountMessage(endMessages);
                clearInterval(counter);
            } else {
                setCountCommunities(Math.ceil(startCommunities));
                setCountMessage(Math.ceil(startMessages));
            }
        }, 100);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    animateCounters();
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div className="counter--section" ref={sectionRef}>
            <div className="counter-section-image">
                <img src="./img/screen-mockups.svg" alt="screen mockups" />
            </div>
            <div className="counter-section-counter">
                <div className="counter-section-counter__communities">
                    <img src="./img/icon-communities.svg" alt="icon-communities" />
                    <h1>{countCommunities}K+</h1>
                    <h4>Communities Formed</h4>
                </div>
                <div className="counter-section-counter__message">
                    <img src="./img/icon-messages.svg" alt="icon-communities" />
                    <h1>{countMessage}m+</h1>
                    <h4>Messages Sent</h4>
                </div>
            </div>
        </div>
    );
}