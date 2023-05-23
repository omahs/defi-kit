import {
  PresetAllowEntry,
  fillPreset,
  checkPermissionsIntegrity,
  applyPermissions,
  encodeCalls,
  Target,
  ChainId,
} from "zodiac-roles-sdk"

export const derivePermissions = (entries: PresetAllowEntry[]) => {
  const permissions = fillPreset(
    {
      allow: entries,
      placeholders: {},
      chainId: 1, // This won't be used (presets only set this field for informational purposes)
    },
    {}
  )
  checkPermissionsIntegrity(permissions)
  return permissions
}

type Options = (
  | {
      /** Address of the roles mod */
      address: string
    }
  | {
      /** The permissions that are currently set on the role */
      currentPermissions: Target[]
    }
) & {
  /**  The mode to use for updating the permissions of the role:
   *  - "replace": The role will have only the passed permissions, meaning that all other currently configured permissions will be revoked from the role
   *  - "extend": The role will keep its current permissions and will additionally be granted the passed permissions
   *  - "remove": All passed permissions will be revoked from the role
   */
  mode: "replace" | "extend" | "remove"
  log?: boolean | ((message: string) => void)
}

export const createApply = (chainId: ChainId) => {
  return async function apply(
    roleKey: string,
    entries: PresetAllowEntry[],
    options: Options
  ) {
    const permissions = derivePermissions(entries)
    return await applyPermissions(
      roleKey,
      permissions,
      "address" in options ? { ...options, network: chainId } : options
    )
  }
}