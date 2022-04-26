import { collection, getDocs } from "firebase/firestore";
import { db } from '../../myFirebase';
import { Store } from '../../dataModels'

export const getStores = async () => {
    const storesRef = collection(db, "stores");
    const snapshot = await getDocs(storesRef)
    const stores: Store[] = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.get('name'),
        admins: doc.get('admins'),
    }))
    return stores
} 