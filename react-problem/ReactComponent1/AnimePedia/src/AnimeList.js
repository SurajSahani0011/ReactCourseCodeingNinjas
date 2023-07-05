import { Component } from "react";
import AnimeCard from "./AnimeCard";

// Complete the AnimeList Component
class AnimeList extends Component {
  
  render() {
    const {anime} = this.props
    return <div className="anime-list">
      {anime.map((ele,ind)=>(
         <AnimeCard key={ind} name={ele.name} image={ele.image}/> 
      ))}
    </div>;
  }
}

export default AnimeList;
