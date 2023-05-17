import React from 'react';
import { useSelector } from 'react-redux';
import BookContainer from './BookContainer';
import Books from './Books';

const BookDisplay = () => {
  const { books } = useSelector((store) => store.books);

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
