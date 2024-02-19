import { resolve } from "node:path"
import { cwd } from "node:process"
import { getDirname, getFilename } from "@/utils"

function normalize(p: string) {
  const placeholder = "<Placeholder>"
  return p.replace(resolve(cwd()), placeholder)
}

describe("utils/path", () => {
  test("getDirname", () => {
    expect(normalize(getDirname(import.meta.url))).toMatchInlineSnapshot(
      `"<Placeholder>/test/"`,
    )
  })

  test("getFilename", () => {
    expect(getFilename(import.meta.url)).toMatchInlineSnapshot(`"path.test.ts"`)
  })
})
