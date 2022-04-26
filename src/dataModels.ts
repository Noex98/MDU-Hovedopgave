export type Store = {
    id: string,
    name: string,
    admins?: string[]
}

export type IUser = {
    uid: string,
    email: string | null,
    phoneNumber: string | null,
    photoURL: string | null,
    displayName: string | null,
    assignedStore?: string,
    storeAdmin?: boolean
}

export type IUserFirestore = {
    assignedStore?: string,
    storeAdmin?: boolean
}