import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookContainer from './BookContainer';
import Books from './Books';
import { fetchBooks } from '../redux/books/booksSlice';

const BookDisplay = () => {
  const { books } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="book-display">
      {books.map((book) => (
        <BookContainer
          key={book.item_id}
          item={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}

      <Books />
    </div>
  );
};

export default BookDisplay;
