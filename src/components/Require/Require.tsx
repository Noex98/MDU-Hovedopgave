import React from 'react'
import { ProtectedRoute } from '../../myFirebase'
import { RequireAssignedStore } from './components/RequireAssignedStore'

type Props = {
    children: React.ReactChild | React.ReactChild[]
    loggedIn?: boolean,
    assignedStore?: boolean,
    admin?: boolean,
}

/**
 * Require certain conditions before entering a component
 * - loggedIn: If user is not signed in, redirect to login page
 * - assignedStorre: If user is not assigned a store, redirect to store select
 * - admin: to be done
 */


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
