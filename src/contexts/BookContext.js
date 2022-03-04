import React, { createContext, useReducer,useEffect} from 'react';
import {BookReducer} from '../reducers/BookReducer';

//    Using Context + Reducer 

export const BookOp = createContext();

export default function BookContext(props) {

    const [books, dispatch] = useReducer(BookReducer, [] , ()=>{

        const data = localStorage.getItem('books');
        return data ? JSON.parse(data) : [] ;
    })

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])
   
    return (
        <BookOp.Provider value={{books,dispatch}}>
            {props.children}
        </BookOp.Provider>
    )
}
