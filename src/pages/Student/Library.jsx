import { useState } from 'react';
import Sidebar from './Sidebar';
import "../../Styles/Library.css"

const Library = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [books, setBooks] = useState([
    { _id: 1, bookname: 'Book 1', author: 'Author A' },
    { _id: 2, bookname: 'Book 2', author: 'Author B' },
    { _id: 3, bookname: 'Book 3', author: 'Author C' },
  ]);

  const handleBorrowBook = (id) => {
    // Implement borrow book functionality here
    console.log(`Book with ID ${id} has been borrowed.`);
  };

  return (
    <div className="LibraryContainer">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '260px' : '80px' }}>
        <h2 className="LibraryHeader">Library</h2>
        <ul className="BookList">
          {books.map((book) => (
            <li key={book._id} className="BookItem">
              <h3 className="BookTitle">{book.bookname}</h3>
              <p className="BookAuthor">Author: {book.author}</p>
              <button className="BorrowButton" onClick={() => handleBorrowBook(book._id)}>Borrow</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Library;
