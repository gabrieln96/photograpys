import {useState, useEffect, useRecuder} from 'react'
import {db} from "../firebase/config"
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { async } from '@firebase/util'

const initialState = {
    loading: null,
    error: null
}

const insertReducer = (state, action) => {

    switch(action.type) {
        case "LOADING":
            return{loading: true, error: null}
        case "INSERTED_DOC":
            return{loading: false, error: null}
        case "ERROR":
            return{loading: false, error: action.payload}
        default:
            return state;
    }

}

export const useInsertDocument = (docCollection) => {

    const [response, dispatch] = useRecuder(insertReducer, initialState)

    const [ cancelled, setCancelled] = useState(false)

    const checkCancelBoferoDispatch = (action) => {
        if(!cancelled){
            dispatch(action)
        }
    }

    const insertDocument = async (document) => {
        checkCancelBoferoDispatch({
            type:"LOADING",
        });

        try {

            const newDocument = {...document, createAt: Timestamp.now()}

            const insertedDocument = await addDoc(
                collection(db, docCollection),
                newDocument
            )

            checkCancelBoferoDispatch({
                type:"INSERTED_DOC",
                payload: insertedDocument
            });
            
        } catch (error) {

            checkCancelBoferoDispatch({
                type:"ERROR",
                payload: error.message,
            });
            
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return {insertDocument, response};
}