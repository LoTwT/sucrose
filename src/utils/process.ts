import process from "node:process"

export const exitProcess = (code = 0) => process.exit(code)
