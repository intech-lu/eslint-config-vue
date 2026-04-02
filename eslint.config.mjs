import intechEslintConfig from '@intech.lu/eslint-config';
import skipFormattingConfig from '@vue/eslint-config-prettier/skip-formatting';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  ...intechEslintConfig,
  ...pluginVue.configs['flat/strongly-recommended-error'],
  skipFormattingConfig,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
      }
    }
  }
);
