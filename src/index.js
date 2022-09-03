import React from "react";
import {createRoot} from "react-dom/client";
import './index.css';

const Books = [
  {
    id: 1,
    name: "Data Bases (Chapman & Hall Computing Series)",
    author: "Peter Laurie",
    image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/418ERyNcifL._AC_UY327_FMwebp_QL65_.jpg",
    description: "Information management is one of the things computers do well. Databases explains clearly how information is organised in microcomputers, how the software works and how to get hold of relevant data and keep it up-to-date. This book should be of interest to microcomputer users."
  },
  {
    id: 2,
    name: "Exploiting B. B. C. BASIC (Newnes Technical Books)",
    author: "A.P. Stephenson and D.J. Stephenson",
    image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/414G+jWbkTL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 3,
    name: "Introduction to Data Processing",
    author: "Gary S. Popkin and Arthur H. Pike",
    image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71TLk9OSmNL._AC_UY327_FMwebp_QL65_.jpg"
  },
  {
    id: 4,
    name: "Learning Assembly Language: A Guide for Programmers",
    author: "Hugo T. Jackson and A.M. Fischer",
    image: "https://m.media-amazon.com/images/I/91YSLIJ7M8L._AC_UY327_QL65_.jpg"
  },
  {
    id: 5,
    name: "Computer Systems: A Programmer's Perspective",
    author: "Randal E. Bryant and David R. O'Hallaron",
    image: "https://m.media-amazon.com/images/I/91tDzKIkIoL._AC_UY327_QL65_.jpg"
  }
]; 

function BookList(){
  return (
    <section className="booklist">
      {Books.map((book)=>{
        return <BookComponent key={book.id} {...book}></BookComponent>
    })}</section>
  )
}

const BookComponent = (props)=>{
  const {image,name,author,description}=props;
  return <article className="book">
    <img src={image} alt="" style={{width:"300px",height:"400px"}}></img>
    <h3 style={{wordwrap:'break-word',width:'300px',alignContent:'center'}}>{name}</h3>
    <h4 style={{color:'#617d98',fontSize: '0.75rem', margintop: '0.25rem'}}>{author}</h4>
    <p style={{fontSize:"15px"}}>{description}</p>
    </article>;
}

createRoot(document.getElementById('root')).render(<BookList/>);