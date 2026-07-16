import intechEslintConfig from '@intech.lu/eslint-config';
import skipFormattingConfig from '@vue/eslint-config-prettier/skip-formatting';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import pluginVueScopedCss from 'eslint-plugin-vue-scoped-css';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import process from 'node:process';

export default defineConfigWithVueTs(
  {
    languageOptions: {
      parserOptions: {
        // The shared JavaScript and Vue presets each contribute a TS config.
        // Resolve projects from ESLint's working directory, i.e. the consuming project.
        tsconfigRootDir: process.cwd(),
      },
    },
  },
  ...intechEslintConfig,
  ...pluginVue.configs['flat/recommended-error'],
  ...vueTsConfigs.strict,
  ...vueTsConfigs.stylistic,
  ...pluginVueA11y.configs['flat/recommended'],
  ...pluginVueScopedCss.configs.recommended,
  skipFormattingConfig,
  {
    files: ['**/*.vue'],
    rules: {
      // Keep every SFC predictable: implementation first, then markup and local styles.
      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],

      // Standardise on Vue 3's concise, typed component authoring model.
      'vue/component-api-style': ['error', ['script-setup']],

      // Keep compiler macros in the same order in every component.
      'vue/define-macros-order': [
        'error',
        {
          order: ['defineOptions', 'defineModel', 'defineProps', 'defineEmits', 'defineSlots'],
          defineExposeLast: true,
        },
      ],

      // Make component contracts explicit and consistent through TypeScript declarations.
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/define-emits-declaration': ['error', 'type-based'],

      // Prefer modern compiler-backed prop destructuring when local bindings are needed.
      'vue/define-props-destructuring': ['error', { destructure: 'only-when-assigned' }],

      // Make custom components immediately distinguishable from native HTML elements.
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],

      // Use Vue's conventional camelCase spelling for component event contracts.
      'vue/custom-event-name-casing': ['error', 'camelCase'],

      // Keep named slot APIs readable and consistent across component boundaries.
      'vue/slot-name-casing': ['error', 'kebab-case'],

      // Use the same readable delimiter in every collection rendering.
      'vue/v-for-delimiter-style': ['error', 'in'],

      // Remove directive and interpolation noise that does not change the rendered output.
      'vue/no-useless-v-bind': 'error',

      // Remove directive and interpolation noise that does not change the rendered output.
      'vue/no-useless-mustaches': 'error',

      // Keep visual styling in component stylesheets instead of static style attributes.
      'vue/no-static-inline-styles': ['error', { allowBinding: true }],

      // Make attribute forwarding explicit, especially for multi-root components.
      'vue/no-duplicate-attr-inheritance': ['error', { checkMultiRootNodes: true }],

      // Keep emitted APIs honest by rejecting declarations that no component emits.
      'vue/no-unused-emit-declarations': 'error',

      // Require safe rel attributes for both static and dynamic links opened in a new tab.
      'vue/no-template-target-blank': ['error', { enforceDynamicLinks: 'always' }],

      // Keep event contracts small and evolvable by emitting one payload object.
      'vue/prefer-single-event-payload': 'error',

      // Require typed payload validation for every emitted event.
      'vue/require-emit-validator': 'error',

      // Keep TypeScript definitions aligned with the shared InTech configuration.
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      // Separate type-only imports from runtime imports in every SFC script.
      '@typescript-eslint/consistent-type-imports': 'error',

      // Preserve declaration-file augmentation while disallowing application namespaces.
      '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],

      // Prevent shadowed variables from making component logic ambiguous.
      '@typescript-eslint/no-shadow': 'error',

      // Match the shared unused-variable policy, including intentionally unused parameters.
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none',
          ignoreRestSiblings: true,
        },
      ],

      // Require scoped component styles; this is the plugin's default and sole allowed style type.
      'vue-scoped-css/enforce-style-type': 'error',

      // Prevent legacy deep selectors from leaking implementation details across components.
      'vue-scoped-css/no-deprecated-deep-combinator': 'error',

      // Keep global selector usage predictable and avoid invalid parent combinations.
      'vue-scoped-css/no-parent-of-v-global': 'error',

      // Treat malformed component CSS as a build-breaking defect.
      'vue-scoped-css/no-parsing-error': 'error',

      // Remove animation definitions that no element in the component uses.
      'vue-scoped-css/no-unused-keyframes': 'error',

      // Remove scoped selectors that no element in the component uses.
      'vue-scoped-css/no-unused-selector': 'error',

      // Make deep selectors explicit about the child selector they target.
      'vue-scoped-css/require-v-deep-argument': 'error',

      // Make global selectors explicit about the selector that escapes scoping.
      'vue-scoped-css/require-v-global-argument': 'error',

      // Make slotted selectors explicit about the slotted content they target.
      'vue-scoped-css/require-v-slotted-argument': 'error',

      // Use the modern deep pseudo-selector form consistently.
      'vue-scoped-css/v-deep-pseudo-style': 'error',

      // Use the modern global pseudo-selector form consistently.
      'vue-scoped-css/v-global-pseudo-style': 'error',

      // Use the modern slotted pseudo-selector form consistently.
      'vue-scoped-css/v-slotted-pseudo-style': 'error',
    },
  },
);
