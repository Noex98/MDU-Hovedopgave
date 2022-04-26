import { doc, setDoc } from "firebase/firestore"
import { db } from "../../myFirebase"

export const asignToStore = async (userId: string, storeId: string) => {
    await setDoc(doc(db, "users", userId), {
        assignedStore: storeId,
        storeAdmin: false,
    })
}