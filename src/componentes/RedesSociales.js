//importo React a Javascript
import React from 'react';

//creo mi componente
 class Redes extends React.Component{
     render(){
         return (
          <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-music-note-beamed" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg></th>
              <th scope="col">Artistas que me gustan</th>
              <th scope="col">Cancion Favorita</th>
              <th scope="col">Escucha su Cancion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Kike Pavon</td>
              <td>Me Gusta</td>
              <td><a href="https://www.youtube.com/watch?v=DQ17sFOT2H0" class="badge badge-success">Ir a escucharla</a></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Evan Craft</td>
              <td>Quiero Decirte</td>
              <td><a href="https://www.youtube.com/watch?v=ZcveqlK4TYs" class="badge badge-success">Ir a escucharla</a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Un Corazon</td>
              <td>Hola Futuro</td>
              <td><a href="https://www.youtube.com/watch?v=asEkFJnFd1k" class="badge badge-success">Ir a escucharla</a></td>
            </tr>
          </tbody>
        </table>
         );
     }
 }

 export default Redes;