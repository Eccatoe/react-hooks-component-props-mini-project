import React from "react";
import blogData from "../data/blog";
import Header from './Header.js'
import ArticleList from './ArticleList.js'
import About from './About.js'

function App() {
  const {name, image, about, id, posts}=blogData
  return (
    <>
    <Header name={name}/>
    <About 
    about={about}
    image={image}
    />
    <ArticleList 
    id={id}
    posts={posts}
    />
    </>
  );
}

export default App;
