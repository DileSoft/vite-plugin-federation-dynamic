import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import federation from '@dilesoft/vite-plugin-federation-dynamic'
import replace from '@rollup/plugin-replace'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  plugins: [
    // injectProcessEnv({
    //   NODE_ENV: 'production'
    // }),
    resolve(),
    babel(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    }),
    federation({
      filename: 'remoteEntry.js',
      exposes: {
        './Button': 'src/button',
        './Button1': 'src/button1'
      },
      shared: [
        {
          react: {
          },
          'react-dom': {
            requiredVersion: pkg.dependencies['react-dom'],
            import:false
          }
        }
      ]
    })
  ],
  output: {
    format: 'esm',
    dir: pkg.main,
    // minifyInternalExports:false
  },
  // external: ['react', 'react-dom'],

  // treeshake:false,
}
