import React, { Component } from "react";
import Card from "./Card";
import './cardlist.css';


const CardList = ({projects}) => {
  const cardArray = projects.map((project, i) =>{
    return <Card title={project.title} description={project.description}/>
  });
  return (<div><h1 id="projects" className="card-list-title">Projects</h1><div className="card-list">{cardArray}</div></div>);
};
export default CardList;
