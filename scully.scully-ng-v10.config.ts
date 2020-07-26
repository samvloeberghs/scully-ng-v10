import { ScullyConfig } from '@scullyio/scully';

const {DisableAngular} = require('scully-plugin-disable-angular');
const {MinifyHtml} = require('scully-plugin-minify-html');

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-ng-v10',
  outDir: './dist/static',
  defaultPostRenderers: [DisableAngular, MinifyHtml],
  routes: {},
};
