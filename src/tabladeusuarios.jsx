import React from 'react';

/** Condiciones para hacer un componente
 * 1.- Debe comenzar con LETRA y MAYUSCULA 
 * 2.- Debe retornar algo
 * 3.- Debe retorar UN y SOLO UN nodo
*/




export const TablaUsuarios = ({usuarios})=>{
  return(
   	<table>
        <thead>
              <tr>
	              <th>Nombre</th>
								<th>Apellido</th>
						    <th>Edad</th>
              </tr>
      	</thead>
        <tbody>
            {usuarios.map(usuario=>{
           return <FilaUsuario usuario={usuario}/>
          })}
        </tbody>
    </table>
  )
}





