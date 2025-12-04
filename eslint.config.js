// @ts-check

import { defineConfig } from "@ayingott/eslint-config"

export default defineConfig({
  rules: {
    "unicorn/prefer-math-trunc": "off",
    "unicorn/prefer-string-slice": "off",
    "unicorn/no-for-loop": "off",
  },
})
