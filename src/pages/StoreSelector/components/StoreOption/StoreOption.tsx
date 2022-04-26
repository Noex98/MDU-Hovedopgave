import React from 'react'
import { asignToStore } from '../../../../myFirebase'
import { useNavigate } from 'react-router-dom'

type Props = {
    userId: string,
    storeId: string,
    name?: string,
}

export const StoreOption = ({ name, userId, storeId }: Props) => {

    const navigate = useNavigate()

    const onclickHandler = () => {
        try {
            asignToStore(userId, storeId)
            navigate('/')
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            <span onClick={() => onclickHandler()}>{name}</span>
        </div>
    )
}
