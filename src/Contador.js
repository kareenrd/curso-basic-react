import React, {Component, useState} from 'react';

/**Hook */
function Contador(props){
  const [contador, setContador] = useState(1);

  return (
    <div>
      <p> Conteo : {contador} </p>
      <button onClick = { () => { setContador(contador +1)}}>Aumentar</button>
    </div>
  )
}

export default Contador;