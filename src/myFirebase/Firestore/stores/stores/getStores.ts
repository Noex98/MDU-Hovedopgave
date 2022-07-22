import { collection, getDocs } from "firebase/firestore";
import { db } from '../../..';
import { IStore } from '../../../../dataModels';

export const getStores = async () => {
    const storesRef = collection(db, "stores");
    const snapshot = await getDocs(storesRef)
    const stores: IStore[] = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.get('name'),
        admins: doc.get('admins'),
    }))
    return stores
} 