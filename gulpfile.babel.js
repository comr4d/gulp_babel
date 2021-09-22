import config from './gulp/config';

config.setEnv();

// exports.test = () => {
//   console.log(process.argv.includes('--prod'));
// };

export const build = () => {
  console.log(config.isProd);
};

export const watch = () => {
  console.log(config.isProd);
};
