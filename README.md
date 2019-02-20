# gatsby-netlify-boilerplate

## Install
Make sure to have the Gatsby CLI program installed:
``` sh
npm install --global gatsby-cli
```

## Setup
1. Clone or download the repository from Github.
2. Run the project.
``` sh
cd [/project/directory]
npm install
gatsby develop
```

## Deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

## Table of Contents
```
Folders
- /src
- /static

Documents
- README.md

Developer
- gatsby-config.js
- gatsby-node.js

Other
- package.json
- yarn.lock
- LICENSE
- .gitignore
```
### gatsby-config.js

```
siteMetadata:
 title:
 description:
 etc.

plugins: [
 gatsby-react-helmet,
 gatsby-plugin-less,
 gatsby-plugin-google-analytics
 
 gatsby-plugin-manifest, // Saves web application to smartphone, behaves similar to native apps
 gatsby-plugin-offline,
 
 gatsby-source-filesystem, // First Instance of Plugin: Gatsby Image Support
 // You can have multiple instances of this plugin to read source nodes from different locations

 gatsby-transformer-sharp,
 gatsby-plugin-sharp,

 gatsby-transformer-remark,
  - gatsby-remark-relative-images-v2,
  - gatsby-remark-images,

 gatsby-plugin-netlify-cms,
 gatsby-plugin-netlify
]
```
