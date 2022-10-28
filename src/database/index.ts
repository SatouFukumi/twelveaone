import * as firebase from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { z } from "zod"

const validator = z.object({
    apiKey: z.string(),
    authDomain: z.string(),
    projectId: z.string(),
    storageBucket: z.string(),
    messagingSenderId: z.string(),
    appId: z.string(),
    measurementId: z.string(),
})

export const app = firebase.getApps().length
    ? firebase.getApp()
    : firebase.initializeApp(
          validator.parse({
              apiKey: process.env.DB_API_KEY,
              authDomain: process.env.DB_AUTH_DOMAIN,
              projectId: process.env.DB_PROJECT_ID,
              storageBucket: process.env.DB_STORAGE_BUCKET,
              messagingSenderId: process.env.DB_MESSAGING_SENDER_ID,
              appId: process.env.DB_APP_ID,
              measurementId: process.env.DB_MEASUREMENT_ID,
          })
      )

export const firestore = getFirestore(app)
