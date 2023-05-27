import path from "node:path"
import fs from "node:fs"
import { parse } from "dotenv"
import { expand } from "dotenv-expand"
import { tryStatSync } from "./fs"

/**
 * simple version of loadEnv from Vite
 * @see https://github.com/vitejs/vite/blob/main/packages/vite/src/node/env.ts
 */

export const loadEnv = (envDir: string) => {
  const envFiles = [".env", ".env.local"]

  const parsed = Object.fromEntries(
    envFiles.flatMap((file) => {
      const filePath = path.join(envDir, file)

      if (!tryStatSync(filePath)?.isFile()) return []
      return Object.entries(parse(fs.readFileSync(filePath)))
    }),
  )

  // let environment variables use each other
  expand({ parsed })

  return parsed
}
