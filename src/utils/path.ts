import path from "node:path"
import { isWindows } from "./os"

export const normalizePath = (id: string) =>
  path.posix.normalize(isWindows ? normalizeSlash(id) : id)

export const normalizeSlash = (p: string) => p.replace(/\\/g, "/")
