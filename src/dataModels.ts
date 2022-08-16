export type IStore = {
    id: string,
    name: string,
    admins?: string[]
    spilloverMemory?: number,
};

export type IUserAuth = {
    uid: string,
    email: string | null,
    phoneNumber: string | null,
    photoURL: string | null,
    displayName: string | null,
};

export type IUserFirestore = {
    assignedStore?: string,
    storeAdmin?: boolean,
};

export interface IUser extends IUserFirestore, IUserAuth {}

export type ITaskBase = {
    id: string,
    name: string,
    time: string,
    description: string,
    attachments: {
        url: string
    }[],
}

export interface ITask extends ITaskBase {
    completed: boolean
}

export interface IRutine extends ITaskBase {
    weekday: number[]
}