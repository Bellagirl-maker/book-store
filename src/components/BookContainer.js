import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { deleteBook } from '../redux/books/booksSlice';
import '../styles/BookContainer.css';

const BookContainer = ({
  item, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(deleteBook(id));
  };

  const percentage = 80;

  return (
    <div className="book-container">
      <div className="book-details">
        <div className="category">{ category }</div>
        <div className="book-title">{ title }</div>
        <div className="book-author">{ author }</div>
        <div className="book-buttons">
          <button type="button" className="book-btn">Comments</button>
          <button
            type="button"
            className="book-btn"
            onClick={() => handleRemoveBook(item)}
          >
            Remove
          </button>
          <button type="button" className="book-btn">Edit</button>
        </div>
      </div>
      <div
        style={{ width: '10rem', height: '5rem' }}
        className="progress"
      >
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({ pathColor: '#0EA5E9', marginRight: '10px' })}
        />
        <div className="completed">
          <p className="ml-5 text-sm">
            <span className="font-semibold">{percentage}</span>
            % Completed
          </p>
        </div>
      </div>
      <div className="chapter-box">
        <p>current chapter</p>
        <div className="chapter">Chapter 17: &quot;A Lesson Learned&quot;</div>
        <button type="button" className="update-progress-btn">UPDATE PROGRESS</button>
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
