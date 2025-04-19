import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import Sidebar from './Sidebar'
import "../../Styles/Library.css"

const Library = () => {

  let [books, setBooks] = useState([]);
  let [title, setTitle] = useState([]);
  let [author, setAuthor] = useState([]);
  
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  let addNewBook = (event) => {
    event.preventDefault();
    setBooks((prevBooks) => {
      return [...prevBooks, {title: title, author: author, id: uuidv4()}]
    });
    setTitle("");
    setAuthor("");
  };

  let updateTitleValue = (event) => {
    setTitle(event.target.value);
  };
  
  let updateAuthorValue = (event) => {
    setAuthor(event.target.value);
  };

  let deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((prevBooks) => prevBooks.id !== id));
  }



  return (
    <div className='LibraryContainer'>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}  />
      <div className="Content" style={{ marginLeft: isOpen ? '260px' : '80px' }}>
        <h1 className="Title">Library Management</h1>
        <form onSubmit={addNewBook} className="AddBookForm">
          <h2>Add New Book</h2>
          <div className="FormGroup">
            <label htmlFor="title">Title:</label>
            <input 
              type="text" 
              value={title}
              onChange={updateTitleValue}
              name='title' 
              id='title' 
              required 
            />
          </div>
          <div className="FormGroup">
            <label htmlFor="author">Author:</label>
            <input 
              type="text" 
              value={author}
              onChange={updateAuthorValue}
              name='author'
              id='author' 
              required 
            />
          </div>
          <button type='submit'>Add Book</button>
        </form>

        <h2>Books</h2>
        {books.length > 0 ? (
          <ul className="BookList">
            {books.map((book) => (
              <li className="BookItem" key = {book.id}>
                <span>{book.title} - {book.author}</span>
                &nbsp;&nbsp;
                <button onClick={() => deleteBook(book.id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Books to Display</p>
        )}
      </div>
    </div>
  )
}

export default Library
