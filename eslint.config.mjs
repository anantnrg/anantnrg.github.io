// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    semi: ["error", "always"],
    "eqeqeq": "error",
    "no-console": "warn",
    "import/no-unresolved": ["off"],
    "import/prefer-default-export": "off",
    "import/extensions": "off"
  },
  ignores: [
    "node_modules",
    "build",
    "dist",
    "public"
  ],
});
