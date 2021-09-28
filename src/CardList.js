import React from "react";
import Card from "./Card";
import './cardlist.css';


const CardList = ({projects}) => {
  const cardArray = projects.map((project, i) =>{
    return <Card title={project.title} description={project.description}/>
  });
  return (<div><div className="card-list">{cardArray}</div></div>);
};
export default CardList;
