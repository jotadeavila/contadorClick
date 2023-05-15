
import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import LogoContador from './imagenes/pngegg.png'

function App() {

  const [numClick, setNumClick] = useState(0);

  const manejarClick = () => {
    setNumClick( numClick + 1 )
  }

  const reiniciarContador = () => {
    setNumClick( 0 )
  }

  return (
    <div className='App'>
      <div className='img-logo-contenedor'>
        <img 
          className='img-logo'
          src={LogoContador}
          alt='Logo de contador'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClick={numClick}
        />
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
