/* eslint-disable @typescript-eslint/no-explicit-any */
import superJSON from "./instance"

const stringifyFunction = (fn: () => any) => {
  // eslint-disable-next-line camelcase
  return [{ __superjson_type__: "function" }, fn.toString()]
}

const isStringifiedFunction = (payload: any) => {
  return (
    payload instanceof Array
    && typeof payload[0] === "object"
    && "__superjson_type__" in payload[0]
    && payload[0].__superjson_type__ === "function"
  )
}

const backToFunction = (fnString: string) => {
  return new Function("return " + fnString)()
}

const recursivelyStringifyFunctions = (payload: any) => {
  if (payload === null) return payload

  if (typeof payload === "function") return stringifyFunction(payload)

  if (typeof payload === "object")
    for (const [key] of Object.entries(payload)) {
      const property = payload[key]

      if (typeof property === "object") recursivelyStringifyFunctions(property)
      else if (typeof property === "function")
        payload[key] = stringifyFunction(property)
    }

  return payload
}

const recursivelyParseFunctions = (payload: any) => {
  if (payload === null) return payload

  if (isStringifiedFunction(payload)) return backToFunction(payload[1])

  if (typeof payload === "object")
    for (const [key] of Object.entries(payload)) {
      const property = payload[key]

      if (isStringifiedFunction(property)) payload[key] = backToFunction(property[1])
      else if (typeof property === "object") recursivelyStringifyFunctions(property)
    }

  return payload
}

const transformer = {
  serialize(object: any) {
    return superJSON.serialize(recursivelyStringifyFunctions(object))
  },

  deserialize<T>(payload: any): T {
    return recursivelyParseFunctions(superJSON.deserialize(payload))
  },
}

export default transformer
