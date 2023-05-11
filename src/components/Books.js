import React from 'react';

function Books() {
  return (
    <div className="book-container">
      <h1>ADD A NEW BOOK</h1>
      <form>
        <input type="text" className="add-book" placeholder="Book title" />
        <select name="category" id="book">
          <option value="action">Action</option>
          <option value="science">Science</option>
          <option value="economy">Economy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Books;
