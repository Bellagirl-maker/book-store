import React from 'react';
import { useSelector } from 'react-redux';
import BookContainer from './BookContainer';
import Books from './Books';

const BookDisplay = () => {
  const { book } = useSelector((store) => store.book);

  return (
    <div className="book-display">
      {book.map((book) => (
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
