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
    name: "Structure and Interpretation of Computer Programs",
    author: "Harold Abelson  (Author), Gerald Jay Sussman  (Author), Julie Sussman  (Contributor)",
    image: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/4186AAibrkL._SX343_BO1,204,203,200_.jpg",
    description: ""
  },
  {
    id: 3,
    name: "Crafting Interpreters",
    author: "Robert Nystrom",
    image: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41-7uSeOyCL._SX398_BO1,204,203,200_.jpg",
    description: "This book teaches you everything you need to know to implement a full-featured, efficient scripting language. You'll learn both high-level concepts around parsing and semantics and gritty details like bytecode representation and garbage collection."
  },
  {
    id: 4,
    name: "Learning Assembly Language: A Guide for Programmers",
    author: "Hugo T. Jackson and A.M. Fischer",
    image: "https://m.media-amazon.com/images/I/91YSLIJ7M8L._AC_UY327_QL65_.jpg",
    description:"Introduces the statements and commands of assembly language, explains how it differs from BASIC, and discusses conversions, loops, subroutines, strings, and Boolean logic."
  },
  {
    id: 5,
    name: "Computer Systems: A Programmer's Perspective",
    author: "Randal E. Bryant and David R. O'Hallaron",
    image: "https://m.media-amazon.com/images/I/91tDzKIkIoL._AC_UY327_QL65_.jpg",
    description: "Computer systems: A Programmer’s Perspective explains the underlying elements common among all computer systems and how they affect general application performance. Written from the programmer’s perspective, this book strives to teach readers how understanding basic elements of computer systems and executing real practice can lead them to create better programs.  "
  }
]; 

function BookList(){
  return (
    <section className="booklist">
      {Books.map((book)=>{
        return <Book key={book.id} {...book}></Book>
    })}</section>
  )
}

const Book = ({image,name,author,description})=>{
  return <article className="book">
    <img src={image} alt="" style={{width:"300px",height:"400px"}} 
    onClick={()=>{alert("You clicked on: "+name)}} onPointerOver={()=>{console.log(description)}}></img>
    <h3 style={{wordwrap:'break-word',width:'300px',alignContent:'center'}}>{name}</h3>
    <h4 style={{color:'#617d98',fontSize: '0.75rem', margintop: '0.25rem'}}>{author}</h4>
    </article>;
}

createRoot(document.getElementById('root')).render(<BookList/>);