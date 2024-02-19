import { base32FromBuf, base32FromStr, base32ToBuf } from "@/utils"

describe("utils/encoding", () => {
  describe("base32", () => {
    const base32Str = "MF4WS3THN52HI"
    const baseStr = "ayingott"
    const baseBuffer = new Uint8Array([97, 121, 105, 110, 103, 111, 116, 116])

    test("base32ToBuf", () => {
      expect(base32ToBuf(base32Str)).toEqual(baseBuffer.buffer)
    })

    test("base32FromBuf", () => {
      expect(base32FromBuf(baseBuffer.buffer)).toBe(base32Str)
    })

    test("base32FromStr", () => {
      expect(base32FromStr(baseStr)).toBe(base32Str)
    })
  })
})
