import { IRutine, ITask } from "../../../../dataModels";
import { db } from "../../../main";
import { doc, setDoc } from "firebase/firestore"; 

/**
 * Creates intances of rutines in the days collection
 * 
 * @param rutines list of rutines
 * @param tasks list of tasks
 * @param date current day, formated as: yyyy-mm-dd
 */

export const instanciateRutines = (
    rutines: IRutine[], 
    tasks: ITask[], 
    date: string,
    assignedStore: string,
) => {
    for (const rutine of rutines) {
        let found = false
        for (const task of tasks) {
            if (rutine.id === task.id){
                found = true
            }
        }
        if(!found){
            setDoc(doc(db, `stores/${assignedStore}/days/${date}/tasks/${rutine.id}`),{
                name: rutine.name,
                time: rutine.time,
                id: rutine.id,
                description: rutine.description,
                attachments: rutine.attachments,
                completed: false,
            })
            found = false
        }
    }
}