import React from 'react'
import whoseHouse from './houses/whoseHouse'
import Hufflepuff from './houses/hufflepuff';
import {colors,gryffMascot} from ".houses/Gryffindor";

function Hogwarts() {
    console.log(colors)
    gryffMascot();
    whoseHouse();
  return (
    <div>
        <Hufflepuff/>
    
  <h1>welcome to Hogwarts!</h1>
  </div>
  )
}

export default Hogwarts