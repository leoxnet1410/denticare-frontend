
export const UserForm = () => {
  return (
    <div >
      <header class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Bienvenidos a Clínica Dental</h1>
          <p class="lead">Ofrecemos servicios dentales de alta calidad para tu bienestar y salud dental.</p>
          <a class="btn btn-primary btn-lg" href="#contacto" role="button">Agenda tu cita</a>
        </div>
      </header>


      <section id="servicios" class="py-5">
        <div class="container">
          <h2 class="text-center mb-4">Nuestros Servicios</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <Img src="servicio1.jpg" class="card-img-top" alt="Servicio 1" />
                <div class="card-body">
                  <h5 class="card-title">Limpieza Dental</h5>
                  <p class="card-text">Mantén una sonrisa sana y radiante con nuestras limpiezas dentales profesionales.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">

            </div>
            <div class="col-md-4">

            </div>
          </div>
        </div>
      </section>


      <section id="nosotros" class="py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2>Nuestra Clínica Dental</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur autem iusto quas veniam expedita illum sequi ullam eos velit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facere odio officiis adipisci qui debitis beatae natus. Error, quo voluptas.</p>
            </div>
            <div class="col-md-6">
              <Img src="clinica.jpg" class="img-fluid" alt="Clínica Dental" />
            </div>
          </div>
        </div>
      </section>


      <section id="contacto" class="py-5">
        <div class="container">
          <h2 class="text-center mb-4">Contáctanos</h2>
          <div class="row">
            <div class="col-md-6">
              <form>
                <div class="form-group">
                  <Input type="text" class="form-control" placeholder="Nombre" />
                </div>
                <div class="form-group">
                  <Input type="email" class="form-control" placeholder="Correo Electrónico" />
                </div>
                <div class="form-group">
                  <textarea class="form-control" rows="5" placeholder="Mensaje"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
              </form>
            </div>
            <div class="col-md-6">
              <h4>Visítanos</h4>
              <p>123 Calle Principal</p>
              <p>Ciudad, Código Postal</p>
              <h4>Llámanos</h4>
              <p>+123 456 789</p>
            </div>
          </div>
        </div>
      </section>


      <footer class="bg-dark text-light text-center py-3">
        <p>Todos los derechos reservados &copy; 2023 Clínica Dental</p>
      </footer>

    </div>
  );
};