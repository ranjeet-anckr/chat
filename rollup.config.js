import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/makerkdesk-widget.js',
    format: 'iife',
    name: 'ChatComponent',
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    postcss({
      extract: true,
      minimize: true,
    }),
  ],
};
