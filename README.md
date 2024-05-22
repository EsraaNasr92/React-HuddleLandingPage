# Frontend Mentor - Huddle landing page with curved sections solution

This is a solution to the [Huddle landing page with curved sections challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
Huddle landing page with curved sections


### Links

- Solution URL: [Add solution URL here](https://github.com/EsraaNasr92/React-HuddleLandingPage)
- Live Site URL: [Add live site URL here](https://ragged-pigs.surge.sh/)

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

I learned to do the counter and animation display when you scroll to the section

To see how you can add code snippets, see below:

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

## Author

- Website - [Esraa Nasr](https://github.com/EsraaNasr92/)
- Frontend Mentor - [@EsraaNasr92](https://www.frontendmentor.io/profile/EsraaNasr92)
- Twitter - [@__ecupcake](https://twitter.com/__ecupcake)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
