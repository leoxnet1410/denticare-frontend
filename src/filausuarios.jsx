export const FilaUsuario = ({usuario})=>{
    return(
         <tr>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.edad}</td>
              </tr>  )
}