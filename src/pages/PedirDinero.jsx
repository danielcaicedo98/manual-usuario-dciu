import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './Styles.css'

function PedirDinero() {
    const [modo, setModo] = useState(null);
    const [paso, setPaso] = useState(1);
    const finalRef = useRef(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const siguientePaso = () => {
        setPaso(paso + 1);
        setTimeout(() => {
            const scrollToPosition = window.innerHeight / 2;
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }, 100);
    };

    const optionNequi = () => {
        setModo('nequi');
        setPaso(1);
        setTimeout(() => {
            finalRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const optionTransfiya = () => {
        setModo('transfiya');
        setPaso(1);
        setTimeout(() => {
            finalRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

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
            titulo: 'Paso 2: Accede al menú de transacciones',
            descripcion: 'Selecciona el ícono del signo $ en la parte inferior derecha de la pantalla. Una vez dentro del menú, selecciona la opción Pide.',
            imagen: './assets/imagenes/1-2.jpg'
        },
        {
            titulo: 'Paso 3: Selecciona como quieres pedir',
            descripcion: 'Elige si deseas pedir dinero directamente por Nequi o por Transfiya, en este caso, seleccionamos Nequi.',
            imagen: './assets/imagenes/1-3.jpg'
        },
        {
            titulo: 'Paso 4: Ingresa la información',
            descripcion: 'Ingresa la información de la persona a quien le quieres pedir dinero: el número o el contacto, la cantidad y, opcionalmente, un mensaje.',
            imagen: './assets/imagenes/1-4.jpg'
        },
        {
            titulo: 'Si el contacto o número de Nequi es correcto',
            descripcion: 'la app mostrará el mensaje: ¡Listo!',
            imagen: './assets/imagenes/1-5.jpg'
        },
        {
            titulo: 'Paso 6:  Revisa el estado',
            descripcion: 'En la sección de notificaciones, en el apartado En espera, aparecerá la solicitud que realizaste. Una vez tu contacto acepte la solicitud, el dinero llegará automáticamente a tu cuenta.',
            imagen: './assets/imagenes/1-6.jpg'
        }
    ];

    const pasos2 = [
        {
            titulo: 'Paso 1: Abre la Aplicación Nequi',
            descripcion: 'Inicia sesión en la app Nequi desde tu dispositivo.',
            imagen: './assets/imagenes/INICIO.jpg'
        },
        {
            titulo: 'Paso 2: Accede al menú de transacciones',
            descripcion: 'Selecciona el ícono del signo $ en la parte inferior derecha de la pantalla. Una vez dentro del menú, selecciona la opción Pide.',
            imagen: './assets/imagenes/1-2.jpg'
        },
        {
            titulo: 'Paso 3: Selecciona como quieres pedir',
            descripcion: 'Elige si deseas pedir dinero directamente por Nequi o por Transfiya, en este caso, seleccionamos Transfiya.',
            imagen: './assets/imagenes/1-3.jpg'
        },
        {
            titulo: 'Paso 4: Ingresa la información',
            descripcion: 'Ingresa la información de la persona a quien le quieres pedir dinero: el número o el contacto, la cantidad y, opcionalmente, un mensaje.',
            imagen: './assets/imagenes/3-1.jpg'
        },
        {
            titulo: 'Si el contacto o número de Transfiya es correcto',
            descripcion: 'la app mostrará el mensaje: ¡Listo!',
            imagen: './assets/imagenes/1-5.jpg'
        },
        {
            titulo: 'Paso 6:  Revisa el estado',
            descripcion: 'En la sección de notificaciones, en el apartado En espera, aparecerá la solicitud que realizaste. Una vez tu contacto acepte la solicitud, el dinero llegará automáticamente a tu cuenta.',
            imagen: './assets/imagenes/3-2.jpg'
        }
    ];

    const getPasoActual = () => {
        const pasosActuales = modo === 'nequi' ? pasos : pasos2;
        return pasosActuales[paso - 1] || {};
    };

    const { titulo, descripcion, imagen } = getPasoActual();

    return (
        <div className='justify-content-center d-flex vh-10'>
            <Card className="m-3" style={{ width: '200px', height: '200px' }}>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Card.Title>Opciones</Card.Title>
                    <Button
                        style={{
                            backgroundColor: modo === 'nequi' ? '#9B005E' : '#DA0081',
                            color: 'rgb(255, 255, 255)',
                            borderColor: modo === 'nequi' ? 'rgb(0, 128, 0)' : 'rgb(0, 123, 255)'
                        }}
                        className="w-100"
                        onClick={() => optionNequi()}>
                        Nequi
                    </Button>
                    <Button
                        style={{
                            backgroundColor: modo === 'transfiya' ? '#9B005E' : '#DA0081',
                            color: 'rgb(255, 255, 255)',
                            borderColor: modo === 'transfiya' ? 'rgb(0, 128, 0)' : 'rgb(0, 123, 255)'
                        }}
                        className="w-100"
                        onClick={() => optionTransfiya()}>
                        Transfiya
                    </Button>
                </Card.Body>
            </Card>

            <div className="d-flex justify-content-center vh-90 bg-light">
                <Card style={{ width: '35rem', marginBottom: '0.5rem' }} className="shadow">
                    {
                        imagen === '' ? <></> :
                            <Card.Img variant="top" src={imagen} style={{ width: '100%', height: '450px', objectFit: 'contain' }} />
                    }
                    <Card.Body>
                        <Card.Title>{titulo}</Card.Title>
                        <Card.Text>{descripcion}</Card.Text>
                        <div className="d-flex justify-content-between">
                            {paso > 1 && (
                                <Button variant="secondary" onClick={pasoAnterior}>
                                    Anterior
                                </Button>
                            )}
                            {paso < (modo === 'nequi' ? pasos.length : pasos2.length) ? (
                                <Button variant="primary" onClick={siguientePaso}>
                                    Siguiente
                                </Button>
                            ) : (
                                <Button variant="primary" onClick={() => {
                                    setPaso(1);
                                    setModo(null);
                                }}>
                                    Finalizar
                                </Button>
                            )}
                        </div>
                        <div ref={finalRef} />
                    </Card.Body>
                </Card>                
            </div>
        </div>
    );
}

export default PedirDinero;