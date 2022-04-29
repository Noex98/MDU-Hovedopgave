import React, { useContext, useEffect, useState } from 'react';
import { userContext, getStores } from '../../myFirebase';
import { Store } from '../../dataModels'
import { StoreOption } from './components';
import { StyledHeadline, StyledStoreContainer } from './styled';
import { 
    PageFrame,
    TextInput,
    Gutter,
    Spinner,
} from '../../components';



export const StoreSelector = () => {
    
    const [stores, setStores] = useState<Store[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchValue, setSearchValue] = useState('')
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

    const isStoreValid = (store: Store) => {
        if (searchValue === ''){
            return true;
        }
        return store.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    }
    
    return (
        <PageFrame showNav={false} headerUserIcon={false}>
            <Gutter>
                <StyledHeadline>Select store</StyledHeadline>
                {loading && (<Spinner />)}
                <TextInput 
                    placeholder='Search'
                    onChange={e => setSearchValue(e.target.value)}
                />
                <StyledStoreContainer>
                    <>
                        {stores && user && (
                            stores.map((store, index) => (
                                isStoreValid(store) && (
                                    <div key={index}>
                                        <StoreOption userId={user.uid} storeId={store.id} name={store.name} />
                                    </div>
                                )
                            ))
                        )}
                    </>
                </StyledStoreContainer>
                {error && (
                    <>
                        <div>An error occured</div>
                        <div>{error}</div>
                    </>
                )}
            </Gutter>
        </PageFrame>
    )

}
