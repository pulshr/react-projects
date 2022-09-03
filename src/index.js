import React from "react";
import ReactDom from "react-dom";
import './index.css';

function BookList(){
  return (
    <section className="booklist">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}

const Book = ()=>{
  return <article className="book">
    <BookImage/>
    <BookTitle/>
    <BookAuthor/>
    </article>;
}

const BookImage=()=><img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/A1BrXFzlO-L._AC_UL480_QL65_.jpg"></img>
const BookTitle=()=><h1>The Famous Five</h1>
const BookAuthor=()=><h4 style={{color:'#617d98',fontSize: '0.75rem', margintop: '0.25rem'}}>Enid Blyton, Claude Voilier, Eileen Soper</h4>

ReactDom.render(<BookList/>,document.getElementById('root'));