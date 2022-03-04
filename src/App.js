import React from 'react';
import BookContext from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

export default function App() {
  return (
    <div className="App"> 
    <BookContext> 
      <Navbar />
      <BookList />
      <BookForm />
    </BookContext>
    </div>
  )
}
