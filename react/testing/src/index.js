import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

import {books} from './books';
import BookEl from './Book';

function BookList() {
  return (
    <React.Fragment>
      <section className="booklist">
        {books.map(book => <BookEl key={book.id} {...book}></BookEl>)}
      </section>
    </React.Fragment>
  );
}

ReactDom.render(<BookList></BookList>, document.getElementById('root'));
