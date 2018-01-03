# How to use that?

### Preparation
1. Navigate to project folder via terminal
2. Run `npm i`
3. Run `gulp i -g`

Now you are ready to work with project. Just run `npm start` and all styles will compile. This also initiates a watcher that will look for changes you've made.

### Folder structure

* styles/
  * main.less <- has only imports of all needed files
  * reset.less <- static reset file
  * constants.less <- here you will find constants used across the project
  * styles.less <- file with your styles. Feel free to add as many less files as you want, but don't forget to include them into `main.less`
* index.html
* gulpfile.js <- all routine tasks as less/autoprefixer/minify are described here
* package.json <- project dependencies are listed here
* node_modules/ <- installed dependencies are here
* README.md <- project description