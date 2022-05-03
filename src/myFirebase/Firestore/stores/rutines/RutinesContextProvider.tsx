import { collection, onSnapshot } from 'firebase/firestore'
import { ReactNode, useContext, createContext, useState, useEffect } from 'react'
import { userContext } from '../../../Auth'
import { db } from '../../../main'

type Props = {
    children: ReactNode
}

export const rutineContext = createContext<any>(null)

export const RutinesContextProvider = ({children}: Props) => {

    const user = useContext(userContext)
    const [rutines, setRutines] = useState<any>(null)

    useEffect(() => {
        if (user?.assignedStore){
            
            const unsubscribe = onSnapshot(collection(db, `stores/${user.assignedStore}/rutines`),
                (data) => {
                    const x: any = [];
                    data.forEach(doc => x.push({...doc.data(), id: doc.id}))
                    setRutines(x)
                },
                (error) => console.log(error)
            );
            return unsubscribe
        }
    }, [user?.assignedStore])

    return (
        <rutineContext.Provider value={rutines}>
            {children}
        </rutineContext.Provider>
    )
}
