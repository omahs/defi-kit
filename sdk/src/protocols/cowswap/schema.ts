import { z } from "zod"
import { zx } from "../../zx"

const schema = {
  swap: z.object({
    sell: zx.address().array().optional(),
    buy: zx.address().array().optional(),
  }),
}

export const eth = schema
export const gor = schema
