import React, { useEffect, useState } from 'react';

function BookContainer() {
  const [complete, setComplete] = useState('0');

  useEffect(() => {
    setComplete('90%');
  }, []);
  return (
    <div className="book-container">
      <div className="book-details">
        <div className="book-category">Action</div>
        <div className="book-title">The Hunger Games</div>
        <div className="book-author">Suzzane Collins</div>
        <div className="book-buttons">
          <button type="button" className="book-btn">
            Comments
          </button>
          <button type="button" className="book-btn">
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
}

export default BookContainer;
