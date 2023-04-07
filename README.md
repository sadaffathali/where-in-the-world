# alibaba-task

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

Serve on the [Where-in-the-world](https://where-in-the-world-alibaba.netlify.app/).


## Description 
- Used pure CSS and SCSS to implement the demo 
- Allows searching using country names with or without all of their vowel letters
- Provides sort functionality for population and country name
- All content is server-side rendered and has a fallback if the request faces an error
- Collects Google Analytics event in the Mode toggle button and the back to the home link in error layout for computing engagement rate and user return rate
- Avoid duplicate and redundant styles. Global styles are in the main.scss file, and components have their specific styles.
- Includes a Dockerfile for easy deployment
- Includes unit tests for components for easy deployment
- Stores the filters in the URL query parameters and syncs them with the component filter object
- Uses lazy loading for country images [Document](https://web.dev/browser-level-image-lazy-loading/)
