import React from "react";
import ReactDom from "react-dom";
import './index.css';

//constants

const firstBook = {
  name: "Data Bases (Chapman & Hall Computing Series)",
  author: "Peter Laurie",
  image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/418ERyNcifL._AC_UY327_FMwebp_QL65_.jpg"
}

const secondBook = {
  name: "Exploiting B. B. C. BASIC (Newnes Technical Books)",
  author: "A.P. Stephenson and D.J. Stephenson",
  image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/414G+jWbkTL._AC_UY327_FMwebp_QL65_.jpg"
}

const thirdBook = {
  name: "Introduction to Data Processing",
  author: "Gary S. Popkin and Arthur H. Pike",
  image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71TLk9OSmNL._AC_UY327_FMwebp_QL65_.jpg"
}

const fourthBook = {
  name: "Introduction to Data Processing",
  author: "Gary S. Popkin and Arthur H. Pike",
  image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71TLk9OSmNL._AC_UY327_FMwebp_QL65_.jpg"
}

const fifthBook = {
  name: "Learning Assembly Language: A Guide for Programmers",
  author: "Hugo T. Jackson and A.M. Fischer",
  image: "https://m.media-amazon.com/images/I/91YSLIJ7M8L._AC_UY327_QL65_.jpg"
}

function BookList(){
  return (
    <section className="booklist">
      <Book image={firstBook.image} title={firstBook.name} author={firstBook.author}/>
      <Book image={secondBook.image} title={secondBook.name} author={secondBook.author}/>
      <Book image={thirdBook.image} title={thirdBook.name} author={thirdBook.author}/>
      <Book image={fourthBook.image} title={fourthBook.name} author={fourthBook.author}/>
      <Book image={fifthBook.image} title={fifthBook.name} author={fifthBook.author}/>
    </section>
  )
}

const Book = (props)=>{
  return <article className="book">
    <img src={props.image} alt="" style={{width:"300px",height:"400px"}}></img>
    <h3 style={{wordwrap:'break-word',width:'300px',alignContent:'center'}}>{props.title}</h3>
    <h4 style={{color:'#617d98',fontSize: '0.75rem', margintop: '0.25rem'}}>{props.author}</h4>
    </article>;
}



ReactDom.render(<BookList/>,document.getElementById('root'));