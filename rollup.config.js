import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

const config = {
    input: './lib/pgn-types.js',
    output: {
      file: 'lib/index.umd.js',
      format: 'umd',
      name: 'pgn-types',
    },
    plugins: [commonjs(), resolve()],
}

export default config