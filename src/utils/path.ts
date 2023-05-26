import path from "node:path"
import { fileURLToPath } from "node:url"

import { isWindows } from "./os"

export const normalizeSlash = (p: string) => p.replace(/\\/g, "/")

export const normalizePath = (id: string) =>
  path.posix.normalize(isWindows ? normalizeSlash(id) : id)

export const useDirname = (url: string) => fileURLToPath(new URL(".", url))

export const useFilename = (url: string) => fileURLToPath(url)
