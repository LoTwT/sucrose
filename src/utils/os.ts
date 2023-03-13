import os from "node:os"

export const isWindows = os.platform() === "win32"
