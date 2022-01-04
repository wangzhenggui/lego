import pack from './package.json';

export default {
  esm: 'rollup',
  cjs: 'rollup',
  umd: {
    name: pack.name,
  }
};
