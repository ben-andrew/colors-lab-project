import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      "no-unused-vars": "warn",
      "no-dupe-keys": "error"
    }
  },

  {
    files: ["html/js/colorUtils.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      }
    }
  },

  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      }
    }
  },

  {
    ignores: ["html/js/md5.js"]
  }
]);