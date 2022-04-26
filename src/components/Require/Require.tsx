import React from 'react'
import { ProtectedRoute } from '../../myFirebase'
import { RequireAssignedStore } from './components/RequireAssignedStore'

type Props = {
    children: React.ReactChild | React.ReactChild[]
    loggedIn?: boolean,
    assignedStore?: boolean,
    admin?: boolean,
}

export const Require = ({loggedIn, assignedStore, admin, children}: Props) => {

    if (loggedIn && assignedStore) return (
        <ProtectedRoute>
            <RequireAssignedStore>
                {children}
            </RequireAssignedStore>
        </ProtectedRoute>
    )

    if ( loggedIn ) return (
        <ProtectedRoute>
            {children}
        </ProtectedRoute>
    )

  return <>{children}</>
}
