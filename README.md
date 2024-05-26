# Frontend Mentor - Huddle landing page with curved sections solution

This is a solution to the Huddle landing page with curved sections challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
The Huddle landing page with curved sections is a visually appealing and modern web page designed to showcase the features and benefits of a collaborative platform called Huddle. The challenge focuses on creating a responsive landing page with unique curved section dividers, which add a dynamic and engaging visual element. The project involves using various web technologies to ensure the page is both aesthetically pleasing and functional across different devices.


### Links

- [Solution URL here](https://github.com/EsraaNasr92/React-HuddleLandingPage)
- [Live site URL here](https://ragged-pigs.surge.sh/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

I learned how to implement counters and animations that activate when a user scrolls to the specific section.Here's a snippet of the code I used for this feature:

```js
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
```

```js
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
```
### Continued development

In future projects, I plan to:

    Enhance accessibility features.
    Explore more advanced animations and transitions.
    Optimize performance for larger applications.

### Useful resources
- React Documentation - Official React documentation.
- Styled Components Documentation - Official Styled Components documentation.
- Intersection Observer API - Used to trigger animations when elements come into view.

## Author

- Github - [Esraa Nasr](https://github.com/EsraaNasr92/)
- Frontend Mentor - [@EsraaNasr92](https://www.frontendmentor.io/profile/EsraaNasr92)
- Twitter - [@__ecupcake](https://twitter.com/__ecupcake)