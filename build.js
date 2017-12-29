import { rollup } from 'rollup';
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'uglify-js';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { version } from './package.json';

const banner = `/**
* vee-validate-laravel v${version}
*/`

const outputFolder = path.join(__dirname, 'dist');

const uglifyOptions = {
    compress: true,
    mangle: true
};

const inputOptions = {
  input: 'src/vee-validate-laravel.js',
  plugins: [
    resolve(),
    commonjs(),
    buble(),
  ],
};

const outputOptions = {
  format: 'umd',
  name: 'VeeValidateLaravel',
  banner: banner,
};

async function build () {
  console.log(chalk.cyan('Generating main builds...'));

  const bundle = await rollup(inputOptions);
  const { code } = await bundle.generate(outputOptions);

  fs.writeFileSync(path.join(outputFolder, 'vee-validate-laravel.js'), code);
  console.log(chalk.green('Output File:') + ' vee-validate-laravel.js');

  fs.writeFileSync(path.join(outputFolder, 'vee-validate-laravel.min.js'), uglify.minify(code, uglifyOptions).code);
  console.log(chalk.green('Output File:') + ' vee-validate-laravel.min.js');
}

build();