import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-css-only';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';


export default {
  input: 'src/main.jsx',
  output: {
    dir: 'dist',
    format: 'esm',
    name: 'MyLibrary',

  },
  plugins: [
    commonjs(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    css({ output: 'dist/bundle.css' }),
    image({
      exclude: '**/*.png' // <-- exclude PNG files from being included
    }),
    url(),

  ],
};