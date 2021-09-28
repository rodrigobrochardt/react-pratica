import React, { Component } from "react";
import ComboBox from "./ComboBox";
import CardList from "./CardList";
import { projects } from "./projects.js";
import "./cardseacher.css";
import Scroll from "./Scroll";

class CardSeacher extends Component {
  constructor(){
    super()
    this.state ={
      projects: projects,
      combofield: '',
    }
  }
  onComboChange = (event) =>{
    this.setState({combofield: event.target.value});
    
  }
  render() {
    const filteredProjects = this.state.projects.filter(project => {
      return project.category.toLowerCase().includes(this.state.combofield.toLowerCase());
    })
    return (
      <div className="cardseacher">
        <h1 id="projects" className="cardseacher-title">Projects</h1>
        <ComboBox selectedValue ={this.onComboChange} />
        <Scroll>
          <CardList projects={filteredProjects} /> 
        </Scroll> 
      </div>
    );
  }
}

export default CardSeacher;
