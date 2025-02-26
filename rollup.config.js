import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const config = {
  input: 'src/action.js',
  output: {
    esModule: true,
    file: 'dist/action.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [commonjs(), nodeResolve()]
}

export default config