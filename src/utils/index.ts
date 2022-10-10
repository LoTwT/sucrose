import path from "node:path"
import os from "node:os"

export const isWindows = os.platform() === "win32"

export const normalizePath = (id: string) =>
  path.posix.normalize(isWindows ? normalizeSlash(id) : id)

export const normalizeSlash = (p: string) => p.replace(/\\/g, "/")
