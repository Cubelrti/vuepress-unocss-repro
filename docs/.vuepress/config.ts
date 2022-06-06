import { defaultTheme, defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import Unocss from 'unocss/vite';
import * as path from 'path';
import presetWind from '@unocss/preset-wind';

export default defineUserConfig({
  title: 'docs',
  description: 'description',
  bundler: viteBundler({
    viteOptions: {
      plugins: [
        Unocss({
          presets: [presetWind()]
        })
      ]
    }
  }),
  theme: defaultTheme({}),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    })
  ]
});
