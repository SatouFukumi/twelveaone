import { z } from "zod"
import { collection, getDocs, Timestamp } from "firebase/firestore"
import { firestore } from "src/database"
import { publicProcedure, router } from "../router"

const studentSchema = z.object({
    index: z.number().min(1).max(46),
    name: z.string(),
    displayName: z.string().optional(),
    urlName: z.string().optional(),
    studentID: z.string(),
    birthday: z.date(),
    gender: z.enum(["male", "female"]),
    position: z.string().optional(),
    id: z.string(),
})

export type Student = z.infer<typeof studentSchema>
interface RawStudent extends Omit<Student, "id" | "birthday"> {
    birthday: {
        seconds: number
        nanoseconds: number
    }
}

export const membersRouter = router({
    get: publicProcedure.query(async () => {
        const memberCollection = collection(firestore, "members")
        const snapshot = await getDocs(memberCollection)
        const students = snapshot.docs.map<Student>((doc) => {
            const data = doc.data() as RawStudent

            return studentSchema.parse({
                ...data,
                birthday: new Timestamp(
                    data.birthday.seconds,
                    data.birthday.nanoseconds
                ).toDate(),
                id: doc.id,
            })
        })

        return students.sort((a, b) => a.index - b.index) as Student[]
    })
})
