const Historial_citas = () => {

    return (
      <div>
  
  <h3 className="historial">Historial de Citas</h3>
   <div className="citas">
    
      <table className="table  table-hover custom-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Fecha</th>
            <th>Doctor</th>
            <th>Tratamiento</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2023-08-19</td>
            <td>Dr. perez</td>
            <td>Tratamiento A</td>
            <td>En proceso</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2023-08-21</td>
            <td>Dr. guzman</td>
            <td>Tratamiento B</td>
            <td>Completado</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
 


 
  );
};
export default Historial_citas;
   