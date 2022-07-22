import { collection, limit, onSnapshot, query } from 'firebase/firestore'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ITask } from '../../../../dataModels'
import { 
    rutineContext,
    db,
    userContext 
} from '../../../../myFirebase'

type Props = {
    children: ReactNode
}

type TasksContext = {
    today: ITask[],
    spillover: ITask[]
}

export const taskContext = createContext<any>(null)

export const TasksContextProvider = ({children}: Props) => {

    const user = useContext(userContext)
    const rutines = useContext(rutineContext)
    const [days, setDays] = useState(null)
    const [tasks, setTasks] = useState(null)

    useEffect(() => {
        if (user?.assignedStore){
            const daysRef = collection(db, `stores/${user.assignedStore}/days`)
            const q = query(daysRef, limit(3))
            const unsubscribeDays = onSnapshot(q,
                data => {
                    const x: any = [];
                    data.forEach(doc => {
                        const date = new Date(doc.id)
                        x.push({...doc.data(), date: date , id: doc.id})
                    })
                    setDays(x)
                },
                error => console.log(error)
            );
            return () => unsubscribeDays()
        }
    }, [user?.assignedStore])

    useEffect(() => {

        console.log(days);
        console.log(rutines);

    }, [rutines, days])

    return (
        <taskContext.Provider value={tasks}>
            {children}
        </taskContext.Provider>
    )
}
