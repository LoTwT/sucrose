// @ts-check

import { defineFlatConfig } from "@ayingott/eslint-config"

export default defineFlatConfig(
  [
    {
      rules: {
        "unicorn/prefer-math-trunc": "off",
        "unicorn/prefer-string-slice": "off",
        "unicorn/no-for-loop": "off",
      },
    },
  ],
  {
    prettier: true,
    vue: false,
    unocss: false,
    react: false,
  },
)
