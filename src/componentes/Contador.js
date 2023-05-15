import React from "react";
import '../estilos/Contador.css'

function Contador({ numClick }) {
    return (
      <div className="contador">
        { numClick }
      </div>    
    );
}

export default Contador;