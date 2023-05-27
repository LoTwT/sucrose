import fs from "node:fs"

export function tryStatSync(file: string): fs.Stats | undefined {
  try {
    return fs.statSync(file, { throwIfNoEntry: false })
  } catch {
    // Ignore errors
  }
}
