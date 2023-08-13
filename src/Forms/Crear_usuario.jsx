export const Crear_usuario = () => {
    return (
<div>

<div className="form-container">
      <h3>Crear Usuario</h3>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" required />
        </div>
        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
          <input type="date" id="fechaNacimiento" name="fechaNacimiento" required />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico:</label>
          <input type="email" id="correo" name="correo" required />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Número de Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" required />
        </div>
        <button type="submit">Crear Usuario</button>
      </form>
    </div>
</div>

    )}