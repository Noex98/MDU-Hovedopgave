import { doc, updateDoc  } from "firebase/firestore"; 
import { db } from "../../../main";

export const CheckTaskStatus = async (taskId:string, assignedStore: string, completed: boolean) => {
    const today = new Date()
    await updateDoc (doc(db, `stores/${assignedStore}/days/${today.toISOString().split('T')[0]}/tasks/${taskId}`), {
        completed: completed
    });
}