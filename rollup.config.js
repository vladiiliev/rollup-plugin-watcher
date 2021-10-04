import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';
import tsconfig from './tsconfig.json';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                format: 'cjs',
                file: pkg.main,
                sourcemap: true,
                exports: 'auto'
            },
            {
                format: 'cjs',
                file: pkg.unpkg,
                sourcemap: true,
                exports: 'auto',
                plugins: [
                    terser({
                        output: {
                            comments: false
                        }
                    })
                ]
            },
            {
                format: 'esm',
                file: pkg.module,
                sourcemap: true
            }
        ],
        plugins: [
            peerDepsExternal(),
            commonjs(),
            typescript({
                useTsconfigDeclarationDir: true
            }),
            del({ targets: 'dist/*' })
        ]
    },
    {
        input: `${tsconfig.compilerOptions.declarationDir}/index.d.ts`,
        output: [{ format: 'esm', file: pkg.types }],
        plugins: [
            dts(),
            del({
                targets: tsconfig.compilerOptions.declarationDir,
                hook: 'buildEnd'
            })
        ]
    }
];
