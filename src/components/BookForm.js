import React, { useContext, useState } from 'react';
import { BookOp } from '../contexts/BookContext';

export default function BookForm() {

    const { dispatch } = useContext(BookOp);

    const [title, settitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({ type: 'ADD_BOOK', book: { title, author } });
        settitle('');
        setAuthor('');
        // console.log(title,author);
    };

    return (
        <>
            <form>
                <input type='text' value={title} onChange={(e) => settitle(e.target.value)} placeholder='Book Title' required />
                <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Author' required />
                <button onClick={handleSubmit}>Add Book&rarr;</button>
            </form>
        </>
    )
}
