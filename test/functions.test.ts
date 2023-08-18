/* eslint-disable no-console */
import { composeFunctions } from "@/utils"

describe("utils/functions", () => {
  describe("composeFunctions", () => {
    it("should compose functions correctly", () => {
      const foo = vi.fn((f: string) => {
        console.log(`foo:${f}`)
        console.log(f)
      })

      const bar = vi.fn((b: string) => {
        console.log(`bar:${b}`)
      })

      const f = composeFunctions(foo, bar)

      f("param")

      expect(foo).toHaveBeenCalledOnce()
      expect(bar).toHaveBeenCalledOnce()
    })

    it("should compose functions correctly if some functions are undefined", () => {
      const foo = vi.fn((f: number) => {
        console.log(f)
      })

      const bar = undefined

      const f = composeFunctions(undefined, foo, bar, foo)

      f(123)

      expect(foo).toHaveBeenCalledTimes(2)
    })
  })
})
