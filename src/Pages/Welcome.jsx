

export const Welcome = () => {
  return (
    <div>
      <header className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Bienvenidos a Denticare</h1>
          <p className="lead">
            Ofrecemos servicios dentales de alta calidad para tu bienestar y salud dental.
          </p>
          <a className="btn btn-primary btn-lg" href="#contacto" role="button">
            Agenda tu cita
          </a>
        </div>
      </header>

      <section id="servicios" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Nuestros Servicios</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="servicio1.jpg" className="card-img-top" alt="Servicio 1" />
                <div className="card-body">
                  <h5 className="card-title">Limpieza Dental</h5>
                  <p className="card-text">
                    Mantén una sonrisa sana y radiante con nuestras limpiezas dentales profesionales.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">{/* Repite el bloque de servicio aquí */}</div>
            <div className="col-md-4">{/* Repite el bloque de servicio aquí */}</div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Nuestra Clínica Dental</h2>
              <p>
              En nuestro consultorio, nos esforzamos por brindar servicios dentales de la más alta calidad, con un enfoque en la salud bucal integral y el bienestar de nuestros pacientes. Nuestro objetivo es crear sonrisas saludables y radiantes que duren toda la vida.

               Contamos con un equipo de profesionales altamente capacitados y apasionados por su trabajo, quienes te recibirán con amabilidad y comprensión. Utilizamos tecnología de vanguardia y técnicas avanzadas para asegurarnos de que recibas el mejor tratamiento posible.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facere odio officiis adipisci qui
                debitis beatae natus. Error, quo voluptas.
              </p>
            </div>
            <div className="col-md-6">
              <img src="src/img/portada.jpg" className="img-fluid" alt="Clínica Dental" />
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contáctanos</h2>
          <div className="row">
            <div className="col-md-6">
              
            </div>
            <div className="col-md-6">
              <h4>Visítanos</h4>
              <p>123 Calle Principal</p>
              <p>Ciudad, Código Postal</p>
              <h4>Llámanos</h4>
              <p>+123 456 789</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-light text-center py-3">
        <p>Todos los derechos reservados &copy; 2023 Clínica Dental</p>
      </footer>
    </div>
  );
};