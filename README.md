# rollup-plugin-watcher

Dynamically add additional files for watching.

One of the most common issues that can be covered with this plugin is watching scss partials (added with @import), which are not automatically added by rollup.js to the list of watched files.

## Install

```console
npm install --save-dev rollup-plugin-watcher
```

```console
yarn add -D rollup-plugin-watcher
```

## Usage

Create a `rollup.config.js` [configuration file](https://www.rollupjs.org/guide/en/#configuration-files) and import the plugin:

```javascript
import watcher from 'rollup-plugin-watcher';

export default {
    plugins: [watcher(['src/**/*.scss'])]
};
```

## Options

### `globs`

Type: `String[]` <br>
Default: ``

Add an array of files that you want to add to the list of files to watch. The plugin uses [glob](https://www.npmjs.com/package/glob) to match files. There are no restrictions on the extensions used, you can use whatever you need.
