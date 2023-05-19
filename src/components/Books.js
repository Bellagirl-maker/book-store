import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { add } from '../redux/books/booksSlice';
import '../styles/Books.css';

const Books = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(
      add({
        item_id: uuidv4(),
        title,
        author,
        category: 'Unknown',
      }),
    );

    setTitle('');
    setAuthor('');
  };

  return (
    <div className="book-add">
      <hr />
      <h1 className="title">ADD A NEW BOOK</h1>
      <form className="form">
        <input
          type="text"
          className="add-book"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="book-author"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button
          type="submit"
          className="submit-btn"
          onClick={(e) => {
            handleAddBook(e);
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Books;
