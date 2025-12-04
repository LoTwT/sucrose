import path from "node:path"
import { fileURLToPath } from "node:url"

import { isWindows } from "./os"

export const normalizeSlash = (p: string) => p.replaceAll("\\", "/")

export function normalizePath(id: string) {
  return path.posix.normalize(isWindows ? normalizeSlash(id) : id)
}

export const getDirname = (url: string) => fileURLToPath(new URL(".", url))

export function getFilename(url: string) {
  const filepath = normalizeSlash(fileURLToPath(url))
  const filename = filepath.split("/").at(-1)

  return filename
}
