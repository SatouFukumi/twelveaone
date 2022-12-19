// @ts-check
import { str } from "envsafe"

/**
 * @note always use an input option in this client-side env due to the use of webpack bundle
 */
export const clientEnvValidators = {
  SOMETHING: str({ input: process.env.SOMETHING }),
}

export const serverEnvValidators = {
  FIREBASE_API_KEY: str(),
  FIREBASE_AUTH_DOMAIN: str(),
  FIREBASE_PROJECT_ID: str(),
  FIREBASE_STORAGE_BUCKET: str(),
  FIREBASE_MESSAGING_SENDER_ID: str(),
  FIREBASE_APP_ID: str(),
  FIREBASE_MEASUREMENT_ID: str(),

  OWN_API_KEY: str(),

  ...clientEnvValidators,
}
