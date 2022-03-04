import React, { useContext } from 'react';
import { BookOp } from '../contexts/BookContext';

export default function BookList() {

    const { books, dispatch } = useContext(BookOp);

    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return (
                        <li onClick={() => dispatch({type :'REMOVE_BOOK' ,id: book.id})} key={book.id}>
                            <div className="title"> {book.title} </div>
                            <div className="author"> {book.author} </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
    : (<div className="empty">No Book to Read Here :) </div>)
}
