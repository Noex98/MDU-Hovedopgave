import { doc, onSnapshot } from 'firebase/firestore'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { IStore } from '../../../../dataModels'
import { userContext } from '../../../Auth'
import { db } from '../../../main'

type Props = {
    children: ReactNode
}

export const storeContext = createContext<IStore | null>(null)

export const StoreContextProvider = ({children}: Props) => {

    const user = useContext(userContext)
    const [store, setStore] = useState<IStore | null>(null)

    useEffect(() => {
        if (user?.assignedStore){
            const storeRef = doc(db, `stores/${user.assignedStore}`)
            const unsubscribe = onSnapshot(storeRef, doc => {
                setStore({
                    id: doc.id,
                    name: doc.get('id'),
                    admins: doc.get('admins'),
                    spilloverMemory: doc.get('spilloverMemory')
                })
            })
            return () => unsubscribe()
        }
    }, [user?.assignedStore])

    return (
        <storeContext.Provider value={store}>
            {children}
        </storeContext.Provider>
    )
}
