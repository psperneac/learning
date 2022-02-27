import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

const books = [
  {
    title: 'React for dummies',
    author: 'John dummy',
    img: 'https://m.media-amazon.com/images/I/61wQ-srqH2L._AC_UY218_.jpg'
  },
  {
    title: 'Hush, Little Bunny',
    author: 'David Ezra Stein',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81KQUnX7QyL._AC_UL116_SR116,116_.jpg'
  },
  {
    title: 'The Very Hungry Caterpillar Eats Lunch',
    author: 'Eric Carle',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51t2LUiiryL._AC_SX184_.jpg'
  },
  {
    
  }
]

function BookList() {
  return (
    <React.Fragment>
      <section className="booklist">
        <Book {...books[0]}></Book>
        <Book {...books[1]}><p>just another book</p></Book>
        <Book {...books[0]}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque deleniti officia atque distinctio a libero explicabo labore aliquid qui earum neque culpa totam, veniam esse reiciendis, accusamus voluptate molestias nemo?</p></Book>
        <Book title={books[0].title} author={books[0].author} img={books[0].img}></Book>
      </section>
    </React.Fragment>
  );
}

function Book({img, title, author, children}) {
  return (
    <article className="book">
      <Image img={img}></Image>
      <Title title={title}></Title>
      <Author author={author}></Author>
      {children}
    </article>
  );
}

const Image = (props) => <img src={props.img} alt=""></img>;
const Title = (props) => <h1>{props.title}</h1>;
const Author = (props) => <h4>{props.author.toUpperCase()}</h4>;

ReactDom.render(<BookList></BookList>, document.getElementById('root'));
