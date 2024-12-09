import withNuxt from './.nuxt/eslint.config.mjs';

const OFF = 'off';
const ERROR = 'error';
const WARNING = 'warn';

export default withNuxt(
  {
    rules: {
      semi: ERROR,
      radix: OFF,
      'no-shadow': OFF,
      'no-plusplus': OFF,
      'no-console': [WARNING, { allow: [ERROR] }],
      'arrow-body-style': OFF,
      'consistent-return': OFF,
      'no-param-reassign': OFF,
      'no-use-before-define': OFF,
      'max-len': [WARNING, {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: true,
      }],
      'object-curly-newline': [ERROR, {
        ImportDeclaration: {
          multiline: true,
          minProperties: 100,
          consistent: true,
        },
      }],
      'class-methods-use-this': OFF,
        // import
      'import/no-extraneous-dependencies': OFF,
      'import/prefer-default-export': OFF,
      'import/order': [ERROR, {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'internal',
          'object',
          'unknown',
          'type',
        ],
      }],
      // VUE
      'vue/no-unused-refs': ERROR,
      'vue/no-useless-v-bind': ERROR,
      'vue/define-macros-order': ERROR,
      'vue/component-api-style': ERROR,
      'vue/no-useless-mustaches': ERROR,
      'vue/multi-word-component-names': OFF,
      'vue/no-empty-component-block': ERROR,
      'vue/define-props-declaration': ERROR,
      'vue/define-emits-declaration': ERROR,
      'vue/no-template-target-blank': ERROR,
      'vue/no-ref-object-destructure': ERROR,
      'vue/match-component-import-name': ERROR,
      'vue/no-multiple-objects-in-class': ERROR,
      'vue/prefer-separate-static-class': ERROR,
      'vue/no-required-prop-with-default': ERROR,
      'vue/prefer-true-attribute-shorthand': ERROR,
      'vue/no-static-inline-styles': [WARNING, { allowBinding: true }],
      'vue/singleline-html-element-content-newline': ERROR,
      'vue/component-name-in-template-casing': [
        ERROR,
        'PascalCase',
        { registeredComponentsOnly: false },
      ],
      'vue/component-tags-order': [ERROR, {
        order: ['template', 'script', 'style'],
      }],
      '@typescript-eslint/no-explicit-any': WARNING,
      '@typescript-eslint/consistent-type-imports': ERROR,
    }
  }
);
