# rollup-plugin-watcher

Dynamically add additional files for watching


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
    plugins: [
        watcher(['src/**/*.scss'])
    ]
};
```
