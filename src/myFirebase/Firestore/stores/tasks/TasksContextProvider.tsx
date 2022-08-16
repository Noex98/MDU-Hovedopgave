import { collection, limit, onSnapshot, query } from 'firebase/firestore'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ITask } from '../../../../dataModels'
import { 
    rutineContext,
    db,
    userContext 
} from '../../../../myFirebase'
import { instanciateRutines } from './InstanciateRutines'

type Props = {
    children: ReactNode
}

type TasksContext = {
    today: ITask[],
    spillover: ITask[]
}

export const taskContext = createContext<TasksContext | null>(null)

export const TasksContextProvider = ({children}: Props) => {

    const user = useContext(userContext)
    const rutines = useContext(rutineContext)
    const [days, setDays] = useState(null)
    const [tasks, setTasks] = useState<any>(null)
    const today = new Date()

    useEffect(() => {
        if (user?.assignedStore){
            const daysRef = collection(db, `stores/${user.assignedStore}/days/${today.toISOString().split('T')[0]}/tasks`)
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
        if (rutines && days && user?.assignedStore){
            const weekday = today.getDay();
            let todaysRutines = rutines.filter(rutine => rutine.weekday.includes(weekday));

            instanciateRutines(todaysRutines, days, today.toISOString().split('T')[0], user?.assignedStore)

            setTasks({
                today: days,
                spillover: []
            });
        }
    }, [rutines, days])

    return (
        <taskContext.Provider value={tasks}>
            {children}
        </taskContext.Provider>
    )
}
