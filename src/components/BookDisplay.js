import React from 'react';
import BookContainer from './BookContainer';
import Books from './Books';

function BookDisplay() {
  return (
    <div className="book-display">
      <BookContainer />
      <BookContainer />
      <BookContainer />
      <Books />
    </div>
  );
}

export default BookDisplay;
