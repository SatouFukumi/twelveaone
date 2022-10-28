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
              apiKey: process.env.FIREBASE_API_KEY,
              authDomain: process.env.FIREBASE_AUTH_DOMAIN,
              projectId: process.env.FIREBASE_PROJECT_ID,
              storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
              messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
              appId: process.env.FIREBASE_APP_ID,
              measurementId: process.env.FIREBASE_MEASUREMENT_ID,
          })
      )

export const firestore = getFirestore(app)
