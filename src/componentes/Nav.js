//importo React a Javascript
import React from 'react';

//creo mi componente
 class NavbarComp extends React.Component{
     render(){
         return (
             <div class="Container-fluid">
                 <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a class="navbar-brand" href="#">Mi Sitio Web</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Sobre Mi</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Mas
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Actibidades</a>
                    <a class="dropdown-item" href="#">Musica</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Contacto</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
             </div>
         );
     }
 }

 export default NavbarComp;