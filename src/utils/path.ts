import path from "node:path"
import { fileURLToPath } from "node:url"

import { isWindows } from "./os"

export const normalizeSlash = (p: string) => p.replaceAll("\\", "/")

export const normalizePath = (id: string) =>
  path.posix.normalize(isWindows ? normalizeSlash(id) : id)

export const getDirname = (url: string) => fileURLToPath(new URL(".", url))

export const getFilename = (url: string) => fileURLToPath(url)
