import { allowDeposit } from "@/server/actions/deposit"
import { handle } from "@/server/handle"

export default handle(allowDeposit)
