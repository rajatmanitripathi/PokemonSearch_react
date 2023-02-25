import React, { useState } from "react";



const PokeDetail=({data})=>{
return(
    <div>
        <img src ={data?.sprites?.other["official-artwork"].front_default} alt={data.name}/>
<span>name-{data.name}</span>
<span>weight-{data.weight}</span>



    </div>
)
}


export default PokeDetail