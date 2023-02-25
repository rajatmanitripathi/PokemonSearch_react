import {React, useState} from "react";
import PokeDetail from '../components/PokeDetail'



const Search = ()=>{
    
  const[pokemon, setpoke]= useState([])
  const[Data, setData]= useState([])
  const fetcher = ()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
        (response) =>response.json()
      ).then(data=>{
        setData(data)
        console.log(data)
      })

  }
   
    
    return(

        <div className="search"> 
        <div className="searchinfo">
            <input type ={"Search"} placeholder="SearchPokemon" onChange={(e)=>setpoke(e.target.value)}/>
            <button onClick={fetcher}>Search</button>
            <div className="pokedetail">
            <span><PokeDetail data={Data}/></span>
            </div>
           
        </div>
        
        </div>
    )
}
export default Search
