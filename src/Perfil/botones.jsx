const Botones = () => {
  return (
    <div>
      <div className="botones" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <button type="button" className="btn btn-dark ">Nuevo Tratamiento</button>
        <button type="button" className="btn btn-dark ">Crear Pago</button>
        <button type="button" className="btn btn-dark ">Actualización de Datos</button>
        <button type="button" className="btn btn-dark ">Crear Cita</button>
      </div>
    </div>
  );
};

export default Botones;