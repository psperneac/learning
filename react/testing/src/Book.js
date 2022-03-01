function Book({img, title, author, children}) {
    const clickHandler = (e) => {
        console.dir(e);
    }

    return (
        <article className="book">
        <Image img={img}></Image>
        <Title title={title}></Title>
        <Author author={author}></Author>
        <button type='button' onClick={clickHandler}>Click Me</button>
        {children}
        </article>
    );
}

const alertFn = (message) => alert(message); 

const Image = (props) => <img src={props.img} alt="" onMouseOver={() => console.log(props.img)}></img>;
const Title = (props) => <h1 onClick={() => alertFn(props.title)}>{props.title}</h1>;
const Author = (props) => <h4>{props.author.toUpperCase()}</h4>;

export default Book;
