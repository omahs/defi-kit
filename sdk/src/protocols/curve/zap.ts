import { Permission } from "zodiac-roles-sdk"

import { allowErc20Approve } from "../../erc20"
import { Pool } from "./types"

export const allowZapAdd = (pool: Pool) => {
  if (!("zap" in pool) || !("basePool" in pool.zap)) return []
  const result: Permission[] = [
    ...allowErc20Approve([...pool.zap.basePool.tokens], [pool.zap.address]),
    {
      targetAddress: pool.zap.address,
      signature: `add_liquidity(uint256[${
        pool.tokens.length + pool.zap.basePool.tokens.length - 1
      }],uint256)`,
    },
  ]
  return result
}

export const allowZapRemove = (pool: Pool) => {
  if (!("zap" in pool)) return []

  const result: Permission[] = [
    {
      targetAddress: pool.zap.address,
      signature: "remove_liquidity_one_coin(uint256,int128,uint256)",
    },
  ]
  if ("basePool" in pool.zap) {
    const basePoolFunctions: Permission[] = [
      {
        targetAddress: pool.zap.address,
        signature: "remove_liquidity_one_coin(uint256,int128,uint256)",
      },
      {
        targetAddress: pool.zap.address,
        signature: `remove_liquidity(uint256,uint256[${
          pool.tokens.length + pool.zap.basePool.tokens.length - 1
        }])`,
      },
      {
        targetAddress: pool.zap.address,
        signature: `remove_liquidity_imbalance(uint256[${
          pool.tokens.length + pool.zap.basePool.tokens.length - 1
        }],uint256)`,
      },
    ]
    result.push(...basePoolFunctions)
  }
  return result
}
