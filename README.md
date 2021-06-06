# Bootstrap 5 boilerplate with sass and gulp 4
A Bootstrap v5.0.0 boilerplate with bootstrap-icons(1,300+ icons), sass, gulp 4 tasks, browserSync (with hot-reloading). 
You can override bootstrap sass variables by placing those variables in `bootstrap-5-sass-gulp-4-boilerplate/assets/scss/_bootstrap_variable_overrides.scss`

## Pre-requisite
- [Node.js](https://nodejs.org/en/download/ "Node Js")
-  NPM (Comes with Node.js)
- [Gulp 4](https://gulpjs.com/ "Gulp")

Install Gulp cli

     $ npm install --global gulp-cli
     

## Getting started

1. Clone repository:
`git clone https://github.com/JayeshLab/bootstrap-5-sass-gulp-4-boilerplate.git`

2. Change directory:
`cd bootstrap-5-sass-gulp-4-boilerplate`
    
3. Install all dependencies and libraries:
   `npm install`

4. Run Gulp Task:
  - `gulp`      - To compile scss to css, minify css and js and build ready for production files in **dist** folder.

  - `gulp dev`  - Starts a local server with browserSync and hot reloading on changes to files (HTML, SCSS, JS).
   
5. Customize:
   - Custom App Style : assets/scss/app.scss
   - Overriding Bootstrap variable: assets/scss/_bootstrap_variable_overrides.scss
   - Custom SCSS: assets/scss/_general.scss, assets/scss/_layout.scss, assets/scss/_mixins.scss, assets/scss/_module.scss, _variables.scss
   - Custom App Javascript: assets/js/app.js
