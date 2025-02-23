import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

const config = [
  ...baseConfig,
  ...nx.configs['flat/react-typescript'],
  {
    ignores: ['.next/**/*'],
  },
];

export default config;
