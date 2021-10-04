import glob from 'glob';
import { Plugin } from 'rollup';
import { resolve } from 'path';

function watcher(globs: string[]): Plugin {
    return {
        name: 'watcher',
        transform() {
            for (const item of globs) {
                glob.sync(resolve(item)).forEach((filename) => {
                    this.addWatchFile(filename);
                });
            }

            return null;
        }
    };
}

export default watcher;
