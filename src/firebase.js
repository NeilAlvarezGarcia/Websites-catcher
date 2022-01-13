// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, setDoc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa1uQwPaNymVIEubTky7HAf6nOJb3NMbs",
  authDomain: "fs-crud-50e9a.firebaseapp.com",
  projectId: "fs-crud-50e9a",
  storageBucket: "fs-crud-50e9a.appspot.com",
  messagingSenderId: "574565272878",
  appId: "1:574565272878:web:b56d71b1e35d64b4827ebf"
};
const coleccion = 'websites';

// Initialize Firebase
initializeApp(firebaseConfig);

// Getting the firestore hosted in firebase
export const db = getFirestore();

export async function saveDataFirestore(data) {
    try {
        await addDoc(collection(db, coleccion), data);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function showDataFirestore() {
    const dataArray = []

    const dataResult = await getDocs(collection(db, coleccion));

    dataResult.forEach((doc) => {
        const element = doc.data();
        element.id = doc.id;

        dataArray.push(element);
    });
      

    return dataArray;
}

export async function deleteDataFirestore(id) {
    await deleteDoc(doc(db, coleccion, id));
}

export async function updateDataFirestore(id, data) {
    await setDoc(doc(db, coleccion, id), data);
}