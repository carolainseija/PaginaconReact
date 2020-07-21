import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//importo mi Componente uno
import ComponenteUno from './componentes/ComponenteUno';
import NavbarComp from './componentes/Nav';
import MiNombre from './componentes/Nombre';
import Redes from './componentes/RedesSociales';
import ParrafoIntroductor from './componentes/ParrafoIntroductor';
import GithubImage from './componentes/Github';
import InstagramImage from './componentes/Instagram';
import TextareaForm from './componentes/form';





function App() {
  return (
    <div className="App">
      <div className="navbar">
          <NavbarComp/>
        </div>
      <header className="App-header">
      <div class="ALERTAUNO">
        <MiNombre />
        <p1>Si lo puedes imaginar, lo puedes LOGRAR.</p1>
        </div>
    
      </header>
      <body>
      <div className="componentes">
          <ComponenteUno/> </div>
        <div className="ParrafoIntroductor">
          <ParrafoIntroductor/>
        </div>
        <div className="Redes">
          <h2 class="text-center">Artistas que me Gustan</h2>
          <Redes/>
        </div>
        <TextareaForm/>
      </body>
      <h3>Mis Redes</h3>
      <footer>
      <GithubImage/>
    <p>Mi Github.</p>
    <InstagramImage/>
    <p>Mi Instagram.</p>
      </footer>
    
    </div>

  );
}



export default App; 

