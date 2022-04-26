import React, { useContext, useEffect, useState } from 'react';
import { userContext, getStores } from '../../myFirebase';
import { Store } from '../../dataModels'
import { Spinner } from '../../components/Spinner';
import { StoreOption } from './components';



export const StoreSelector = () => {
    
    const [stores, setStores] = useState<Store[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const user = useContext(userContext)
    
    useEffect(() => {
        getStores()
            .then(stores => {
                setStores(stores)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <>
            <div>Select store</div>
            {loading && (<Spinner />)}
            
            {stores && user && (
                stores.map((store, index) => (
                    <StoreOption userId={user.uid} storeId={store.id} name={store.name} />
                ))
            )}

            {error && (
                <>
                    <div>An error occured</div>
                    <div>{error}</div>
                </>
            )}
        </>
    )

}
