import React,{useContext} from 'react';
import {BookOp} from '../contexts/BookContext';

export default function Navbar() {

    const {books} = useContext(BookOp);

    return (
        <div className='navbar'>
            <h1>Book Store</h1>
            <h6>You can Store Your Book Here</h6> 
            <p>Curently You Have <b>{books.length }</b> Book in This Bookstore.</p>
        </div>
    )
}
