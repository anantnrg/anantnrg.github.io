// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    semi: ["error", "always"],
    "prettier/prettier": ["error"],
    "eqeqeq": "error",
    "no-console": "warn",
    "react/display-name": "off",
    "react/no-children-prop": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-unresolved": ["off"],
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension ": "off",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "import/extensions": "off"
  },
  ignores: [
    "node_modules",
    "build",
    "dist",
    "public"
  ],
});
