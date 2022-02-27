import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

function BookList() {
  return (
    <React.Fragment>
      <section className="booklist">
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
      </section>
    </React.Fragment>
  );
}

function Book() {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
}

const Image = () => <img src="https://m.media-amazon.com/images/I/61wQ-srqH2L._AC_UY218_.jpg" alt=""></img>;
const Title = () => <h1>React for dummies</h1>;
const Author = () => <h4 style={{}}>John Dummy</h4>;

ReactDom.render(<BookList></BookList>, document.getElementById('root'));
