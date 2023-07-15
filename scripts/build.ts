import esbuild from 'esbuild';

import pkgJson from '../package.json';

esbuild.buildSync({
  entryPoints: ['src/app.ts'],
  bundle: true,
  platform: 'node',
  target: 'node18',
  format: 'esm',
  outfile: 'dist/app.js',
  external: [...Object.keys(pkgJson.dependencies)],
});
