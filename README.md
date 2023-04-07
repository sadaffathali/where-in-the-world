# 

## Description 
This project is a frontend application built with ٔNuxt.js that allows users to search for countries by name, sort the results by population or country name and filter them by the region. [demo](https://where-in-the-world-alibaba.netlify.app/).


To use this application, simply run the following commands:

## Usage

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


## Features 
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


## Deployment
To deploy this application using Docker, you can use the included Dockerfile. Simply run the following commands:
```bash
$ docker build -t alibaba-task .
$ docker run -p 3000:3000 alibaba-task
```

