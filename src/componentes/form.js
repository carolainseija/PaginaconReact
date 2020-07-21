//importo React a Javascript
import React from 'react';

//creo mi componente
 class TextareaForm extends React.Component{
     render(){
         return (
           <React.Fragment>
               
          
            <form class="form-group col-5 mt-5 shadow p-3 mb-5 bg-white rounded">
              <label class="col-12">Dejame tu opinion</label>
            <input type="text" class="col-5 mr-5" placeholder="Escribe tu Nombre"></input>
            
            <input type="email" class="col-5" placeholder="Escribe su email"></input>
          
          <textarea class="col-8 mt-2" id="exampleFormControlTextarea1" rows="5"></textarea>
        
        <button type="submit" class="btn btn-sm btn-primary mb-2 text-center col-5">ENVIAR</button>
        
            </form>
              
      
           </React.Fragment>
       
         );
     }
 }

 export default TextareaForm;