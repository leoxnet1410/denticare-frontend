import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ApiClient } from "./services/ApiClient";
import { PatientForm } from "./Forms/Patients";
/* Aqui va a estar la tabla de pacientes */

export const Rafa = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    ApiClient.patients.all().then((data)=>{
         setUsuarios(data)
     })
  }, []);

  return (
    <div>
       <PatientForm/>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, i) => {
            return (
              <tr key={i}>
                <td>{usuario.id}</td>
                <td>{usuario.name}</td>
                <td>{usuario.last_name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
