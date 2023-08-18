import { composeFunctions } from "@/utils"

describe("utils/functions", () => {
  describe("composeFunctions", () => {
    it("should compose function correctly", () => {
      const foo = vi.fn((f: string) => {
        // eslint-disable-next-line no-console
        console.log(`foo:${f}`)
      })

      const bar = vi.fn((b: string) => {
        // eslint-disable-next-line no-console
        console.log(`bar:${b}`)
      })

      const f = composeFunctions(foo, bar)
      expect(f.toString()).toMatchInlineSnapshot(`
        "(...args) => {
          toComposedFunctions.forEach((f) => f(args));
        }"
      `)

      f("param")

      expect(foo).toHaveBeenCalledOnce()
      expect(bar).toHaveBeenCalledOnce()
    })
  })
})
