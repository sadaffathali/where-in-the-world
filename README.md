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
- Used pure Css and Scss to implement the demo 
- Searching using the country names with or without all of their vowel letters work.
- Added sort functionality for Population and Country name
- all the content is server-side rendered and has a fallback if the request faces an error
- Collected Google Analytics event in the Mode toggle button and the back to the home link in error layout for computing engagement rate and user return rate
- I tried not to have duplicate and redundant styles. global styles are in the main.scss file and components have their specific styles.
- Added Dockerfile
- Added Unit test for components
- Stored the filters in the URL query parameters and sync them with the component filter object
- Added lazy loading for country images [Document](https://web.dev/browser-level-image-lazy-loading/)
