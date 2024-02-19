import os from "node:os"

export const isWindows = os.platform() === "win32"

export const isMac = os.platform() === "darwin"

export const isAndroid = os.platform() === "android"
