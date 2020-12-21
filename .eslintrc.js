const config = {
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 8,
  },
  "extends": "airbnb-base",
  "plugins": [
    "mocha",
  ],
  "rules": {
    "import/no-cycle": "off",
    "import/named": "warn",
    "import/no-extraneous-dependencies": "off",
    "import/no-anonymous-default-export": [
      "error",
      {
        "allowArray": false,
        "allowArrowFunction": false,
        "allowAnonymousClass": false,
        "allowAnonymousFunction": false,
        "allowLiteral": false,
        "allowObject": false
      }
    ],
    "import/no-named-as-default-member": "warn",
    "import/no-named-as-default": "warn",
    "import/no-unresolved": "warn",
    "import/no-self-import": "error",
    "import/order": "off",
    "import/no-duplicates": "error",
    "import/extensions": [
      1, "never", {}
    ],
    "no-redeclare": [
      1,
      {
        "builtinGlobals": false
      }
    ],
    "function-paren-newline": "off",
    "global-require": "off",
    "arrow-body-style": "warn",
    "camelcase": "warn",
    "prefer-destructuring": "off",
    "padded-blocks": "warn",
    "indent": "warn",
    "no-multi-spaces": "warn",
    "object-curly-newline": "off",
    "object-property-newline": "off",
    "no-restricted-globals": "error",
    "class-methods-use-this": "warn",
    "implicit-arrow-linebreak": "warn",
    "mocha/no-exclusive-tests": "error",
    "no-underscore-dangle": "off",
    "no-unused-expressions": 0,
    "keyword-spacing": "error",
    "lines-between-class-members": "error",
    "prefer-const": "error",
    "no-useless-constructor": "error",
    "space-before-function-paren": "error",
    "no-multiple-empty-lines": "error",
    "template-curly-spacing": "error",
    "radix": "error",
    "comma-spacing": "error",
    "no-extra-semi": "error",
    "space-in-parens": "error",
    "no-shadow": "error",
    "spaced-comment": "error",
    "quotes": "error",
    "quote-props": "error",
    "no-unused-vars": "error",
    "no-undef": "error",
    "comma-dangle": "error",
    "eqeqeq": "error",
    "arrow-parens": [
      1,
      "as-needed",
      {
        "requireForBlockBody": true
      }
    ],
    "no-async-promise-executor": "warn",
    "object-curly-spacing": "error",
    "operator-linebreak": "error",
    "no-mixed-operators": "error",
    "no-else-return": "error",
    "no-console": "error",
    "semi": "error",
    "max-len": "error",
    // https://eslint.org/docs/rules/max-classes-per-file
    "max-classes-per-file": "off",
    // https://eslint.org/docs/rules/prefer-object-spread
    "prefer-object-spread": "off",
    // https://eslint.org/docs/rules/no-useless-catch
    "no-useless-catch": "off",
    // https://eslint.org/docs/rules/no-self-assign
    "no-self-assign": "off",
  },
  "globals": {
    "__NODE_ENV__": true,
    "describe": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "node_modules",
          "./",
          "./src"
        ]
      }
    }
  }
};

module.exports = config;
