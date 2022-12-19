// @ts-check
import { envsafe } from "envsafe"
import { serverEnvValidators } from "./schema.js"

if (typeof window !== "undefined")
  throw new Error(
    `'src/env/server' : server-side environment variables should not be accessed from client-side.`
  )

/**
 * @warning do not use this in client-side
 */
const serverEnv = envsafe(serverEnvValidators)

export default serverEnv
