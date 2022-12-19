// @ts-check
import { envsafe } from "envsafe"
import { clientEnvValidators } from "./schema.js"

if (typeof window === "undefined")
  console.warn(
    `'src/env/client.js' : server-side called, recommend using client-side version.`
  )

const clientEnv = envsafe(clientEnvValidators)

export default clientEnv
