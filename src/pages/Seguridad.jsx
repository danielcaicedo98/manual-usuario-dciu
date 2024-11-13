import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

function Seguridad() {
  const [modo, setModo] = useState(null); // 'recargar' o 'retirar'
  const [paso, setPaso] = useState(1);

  // Función para avanzar al siguiente paso
  const siguientePaso = () => {
    setPaso(paso + 1);
  };

  // Función para retroceder al paso anterior
  const pasoAnterior = () => {
    setPaso(paso - 1);
  };

  // Contenido de cada paso para recargar
  const pasosRecarga = [
    {
      titulo: 'Paso 1: Ingresar a la App',
      descripcion: 'Abre la aplicación Nequi en tu teléfono e ingresa con tu número de teléfono',
      imagen: 'https://via.placeholder.com/500x300?text=Paso+1+-+Ingresar+a+Nequi'
    },
    {
      titulo: 'Paso 2: Seleccionar la Opción de Recargar',
      descripcion: 'En el menú principal, selecciona la opción "Recargar" para acceder a la función de recarga de dinero.',
      imagen: 'https://via.placeholder.com/500x300?text=Paso+2+-+Seleccionar+Recargar'
    },
    {
      titulo: 'Paso 3: Elegir el Medio de Recarga',
      descripcion: 'Elige el método de recarga que prefieras, como transferir desde otra cuenta bancaria o cargar en puntos físicos aliados.',
      imagen: 'https://via.placeholder.com/500x300?text=Paso+3+-+Elegir+Medio+de+Recarga'
    },
    {
      titulo: 'Paso 4: Ingresar el Monto de Recarga',
      descripcion: 'Especifica el monto que deseas recargar. Asegúrate de que sea mayor a $1,000 COP para cumplir con el mínimo de recarga.',
      imagen: 'https://via.placeholder.com/500x300?text=Paso+4+-+Ingresar+Monto'
    },
    {
      titulo: 'Paso 5: Confirmar la Transacción',
      descripcion: 'Revisa los detalles de tu recarga y confirma la transacción.',
      imagen: 'https://via.placeholder.com/500x300?text=Paso+5+-+Confirmar+Transaccion'
    },
    {
      titulo: 'Paso 6: Verifica el Saldo en tu Cuenta',
      descripcion: 'Revisa tu saldo para confirmar que la recarga fue exitosa.',
      imagen: 'https://via.placeholder.com/500x300?text=Paso+6+-+Verificar+Saldo'
    }
  ];

  // Contenido de cada paso para retirar
  const pasosRetiro = [
    {
      titulo: 'Paso: Ingresar a la App Nequi',
      descripcion: 'Abre la aplicación Nequi en tu teléfono e ingresa con tu número de teléfono y clave.',
      imagen: 'https://via.placeholder.com/500x300?text=Paso+1+-+Ingresar+a+Nequi'
    },
    {
      titulo: 'Paso 2: Seleccionar la Opción de Retirar',
      descripcion: 'En el menú principal, selecciona la opción "Retirar" para iniciar el proceso de retiro.',
      imagen: 'https://via.placeholder.com/500x300?text=Paso+2+-+Seleccionar+Retirar'
    },
    {
      titulo: 'Paso 3: Elegir el Monto a Retirar',
      descripcion: 'Especifica el monto que deseas retirar.',
      imagen: 'https://via.placeholder.com/500x300?text=Paso+3+-+Ingresar+Monto'
    },
    {
      titulo: 'Paso 4: Confirmar el Retiro',
      descripcion: 'Revisa los detalles y confirma el retiro.',
      imagen: 'https://via.placeholder.com/500x300?text=Paso+4+-+Confirmar+Retiro'
    },
    {
      titulo: 'Paso 5: Verifica el Saldo',
      descripcion: 'Verifica que el monto fue descontado correctamente de tu saldo.',
      imagen: 'https://via.placeholder.com/500x300?text=Paso+5+-+Verificar+Saldo'
    }
  ];

  // Selecciona los pasos según el modo actual (recargar o retirar)
  const pasos = modo === 'recargar' ? pasosRecarga : pasosRetiro;

  const { titulo, descripcion, imagen } = pasos[paso - 1] || {};

  return (
    <div className='justify-content-center d-flex vh-10'>
      <Card className="m-3" style={{ width: '200px' }}>
        <Card.Body>
          <Card.Title>Opciones</Card.Title>
          <Button variant="primary" className="w-100 mb-2" onClick={() => { setModo('recargar'); setPaso(1); }}>
            Recargar
          </Button>
          <Button variant="primary" className="w-100" onClick={() => { setModo('retirar'); setPaso(1); }}>
            Retirar
          </Button>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-center vh-90 bg-light">

        {!modo ? (
          <Card style={{ width: '24rem' }} className="shadow">
            <Card.Body >
              <Card.Title className="text-center">Selecciona una Opción</Card.Title>
              <Card.Text>En esta sección encontrarás las siguientes opciones</Card.Text>
              {/* Div alineado a la izquierda del Card */}
              <div style={{ padding: '0.5rem', maxWidth: '10rem', marginLeft: '0' }}>
                <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem', padding: 0 }}>
                    <a
                      href="#"
                      onClick={() => setModo('recargar')}
                      className="text-primary"
                      style={{ textDecoration: 'none', display: 'inline' }}
                    >
                      Comprar
                    </a>
                  </li>
                  <li style={{ marginBottom: '0.5rem', padding: 0 }}>
                    <a
                      href="#"
                      onClick={() => setModo('retirar')}
                      className="text-secondary"
                      style={{ textDecoration: 'none', display: 'inline' }}
                    >
                      Retirar
                    </a>
                  </li>
                </ul>
              </div>

            </Card.Body>
          </Card>





        ) : (
          <Card style={{ width: '24rem' }} className="shadow">
            <Card.Img
              variant="top"
              src={imagen}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>{titulo}</Card.Title>
              <Card.Text>{descripcion}</Card.Text>

              <div className="d-flex justify-content-between">
                {paso > 1 && (
                  <Button variant="secondary" onClick={pasoAnterior}>
                    Anterior
                  </Button>
                )}
                {paso < pasos.length ? (
                  <Button variant="primary" onClick={siguientePaso}>
                    Siguiente
                  </Button>
                ) : (
                  <Button variant="primary" onClick={() => {
                    setPaso(1);
                    setModo(null); // Regresar a la pantalla de selección
                  }}>
                    Reiniciar
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
}

export default Seguridad;
