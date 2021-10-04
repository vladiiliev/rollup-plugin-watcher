import replace, { ReplaceInFileConfig } from 'replace-in-file';

interface ReplaceInFileOptions extends ReplaceInFileConfig {
    verbose?: boolean;
}

function searchAndReplace(options: { entry: ReplaceInFileOptions; hook?: string }) {
    const {
        entry = {
            files: '',
            from: '',
            to: ''
        },
        hook = 'closeBundle'
    } = options;

    return {
        name: 'search-and-replace',
        [hook]: () => {
            try {
                const results = replace.sync(entry);

                entry.verbose && console.info('Replacement results:', results);
            } catch (error) {
                console.error('Error occurred:', error);
            }
        }
    };
}

export default searchAndReplace;
