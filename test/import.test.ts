import { interopDefault } from "@/utils"

describe("utils/import", () => {
  it("interopDefault", () => {
    const m: Record<string, any> = {
      value: "outer",
    }

    expect(interopDefault(m)).toMatchInlineSnapshot(`
      {
        "value": "outer",
      }
    `)

    m.default = {
      value: "default-inner",
    }

    expect(interopDefault(m)).toMatchInlineSnapshot(`
      {
        "value": "default-inner",
      }
    `)
  })
})
