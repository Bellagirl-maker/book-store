import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const Books = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch(
      addBook({
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
    <div className="book-container">
      <h1>ADD A NEW BOOK</h1>
      <form>
        <input
          type="text"
          className="add-book"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          name="category"
          id="book"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="action">Action</option>
          <option value="science">Science</option>
          <option value="economy">Economy</option>
        </select>
        <button
          type="submit"
          onClick={() => {
            handleAddBook();
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Books;
