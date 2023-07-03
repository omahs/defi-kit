import { NotFoundError } from "../../../errors"
import tokens from "./tokens"
import { Token } from "./types"
import { depositEther, depositToken, borrowEther, borrowToken } from "./actions"
import { stake } from "../v2/actions"

const findToken = (
  tokens: readonly Token[],
  symbolOrAddress: string
): Token => {
  const nameOrAddressLower = symbolOrAddress.toLowerCase()
  const token = tokens.find(
    (token) =>
      token.symbol.toLowerCase() === nameOrAddressLower ||
      token.token.toLowerCase() === nameOrAddressLower
  )
  if (!token) {
    throw new NotFoundError(`Token not found: ${symbolOrAddress}`)
  }
  return token
}

export const eth = {
  deposit: ({
    targets,
  }: {
    targets: ("ETH" | Token["symbol"] | Token["token"])[]
  }) => {
    return targets.flatMap(
      (target) => target === 'ETH'
      ? depositEther()
      : depositToken(findToken(tokens, target))
    )
  },
  borrow: ({
    targets,
  }: {
    targets: ("ETH" | Token["symbol"] | Token["token"])[]
  }) => {
    return targets.flatMap(
      (target) => target === 'ETH'
      ? borrowEther()
      : borrowToken(findToken(tokens, target))
    )
  },
  stake: () => {
    return stake()
  },
}