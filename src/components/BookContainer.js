import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const BookContainer = ({
  item, title, author, category,
}) => {
  const [complete, setComplete] = useState('0');
  const dispatch = useDispatch();

  useEffect(() => {
    setComplete('90%');
  }, []);

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-container">
      <div className="book-details">
        <div className="book-category">{category}</div>
        <div className="book-title">{title}</div>
        <div className="book-author">{author}</div>
        <div className="book-buttons">
          <button type="button" className="book-btn">
            Comments
          </button>
          <button
            type="button"
            className="book-btn"
            onClick={() => handleRemoveBook(item)}
          >
            Remove
          </button>
          <button type="button" className="book-btn">
            Edit
          </button>
        </div>
      </div>

      <div className="progress-box">
        <div className="percentage">{complete}</div>
        <div className="completed-text">Completed</div>
      </div>

      <div className="chapter-box">
        <p>current chapter</p>
        <div className="chapter">Chapter 17: </div>
        <button type="button" className="update-progress-btn">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

BookContainer.propTypes = {
  item: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookContainer;
