import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './Styles.css'
// import '../../public/assets/gifts/gift_transfiya1.gif'

function Metas() {
    const [modo, setModo] = useState(null); // 'recargar' o 'retirar'
    const [paso, setPaso] = useState(1);
    const finalRef = useRef(null);

    useEffect(() => {
        // Este código hace scroll hacia el top (arriba) solo una vez al montar el componente
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // useEffect(() => {
    //     finalRef.current?.scrollIntoView({ behavior: 'smooth' });
    // }, []);

    // Función para avanzar al siguiente paso
    const siguientePaso = () => {
        setPaso(paso + 1);
        setTimeout(() => {
            // Obtener la altura de la página y calcular la mitad
            const scrollToPosition = window.innerHeight / 2;  // Ajusta esto si quieres un valor más o menos que la mitad

            // Realizar el scroll
            window.scrollTo({
                top: scrollToPosition, // Desplazarse a la mitad de la pantalla
                behavior: 'smooth'     // Animación suave
            });
        }, 100);
    };

    // Función para retroceder al paso anterior
    const pasoAnterior = () => {
        setPaso(paso - 1);
        setTimeout(() => {
            finalRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const pasos = [
        {
            titulo: 'Paso 1: Abre la Aplicación Nequi',
            descripcion: 'Inicia sesión en la app Nequi desde tu dispositivo.',
            imagen: './assets/imagenes/INICIO.jpg'
        },
        {
            titulo: 'Paso 2: Ingresa al botón Tu plata',
            descripcion: 'Una vez ahí podrás ver un desglose detallado de cómo está administrado tu dinero en la aplicación. Por ejemplo, podrás visualizar cuánto tienes en el disponible, en la tarjeta o en los bolsillos, una vez ahí, ingresa en Metas.',
            imagen: './assets/imagenes/2-2.jpg'
        },
        {
            titulo: 'Paso 3: Ingresa en Metas',
            descripcion: 'En Tus Metas, verás las metas que tengas creadas (si tienes), luego selecciona “Crear una Meta”. ',
            imagen: './assets/imagenes/2-3.jpg'
        },
        {
            titulo: 'Paso 4: Ingresa la información',
            descripcion: 'Una vez en "Crear una meta", puedes ingresar el nombre de la meta, el monto que deseas alcanzar, la fecha límite y habilitar la opción para que se descuente dinero periódicamente de tu saldo disponible como aporte a la meta.',
            imagen: './assets/imagenes/2-4.jpg'
        },
        {
            titulo: '¡Listo!',
            descripcion: 'Una vez creada la meta, recibirás un mensaje de confirmación. Podrás ingresar nuevamente al apartado para ver el progreso de tu meta, agregar dinero, cancelarla o retirar el saldo acumulado.',
            imagen: './assets/imagenes/2-5.jpg'
        },
    ];

    const { titulo, descripcion, imagen } = pasos[paso - 1] || {};

    return (
        <div className='justify-content-center d-flex vh-10'>
            <div className="d-flex justify-content-center vh-90 bg-light">
                <Card style={{ width: '35rem', marginBottom: '0.5rem' }} className="shadow">
                    {
                        imagen == '' ? <></> :
                            <Card.Img variant="top" src={imagen} style={{ width: '100%', height: '450px', objectFit: 'contain' }} />}
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
                                    Finalizar
                                </Button>
                            )}
                        </div>
                        <div ref={finalRef} /> {/* Referencia para el scroll */}
                    </Card.Body>
                </Card>                
            </div>
        </div>
    );
}

export default Metas
