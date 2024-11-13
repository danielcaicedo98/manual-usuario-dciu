import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

function Funciones() {
    const [modo, setModo] = useState(null); // 'recargar' o 'retirar'
    const [paso, setPaso] = useState(1);
    const finalRef = useRef(null);

    // Función para avanzar al siguiente paso
    const siguientePaso = () => {
        setPaso(paso + 1);
        // Hacer scroll al final después de cambiar de paso
        setTimeout(() => {
            finalRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Espera corta para asegurar que el paso se actualice
    };

    // Función para retroceder al paso anterior
    const pasoAnterior = () => {
        setPaso(paso - 1);
        setTimeout(() => {
            finalRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const optionEnviar = () => {
        setModo('recargar');
        setPaso(1);
        setTimeout(() => {
            finalRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const optionRetirar = () => {
        setModo('retirar');
        setPaso(1);
        setTimeout(() => {
            finalRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const listEnviar = () => {
        setModo('recargar');
        setTimeout(() => {
            finalRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const listRetirar = () => {
        setModo('retirar');
        setTimeout(() => {
            finalRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    // Contenido de cada paso para recargar
    const pasosRecarga = [
        {
            titulo: 'Paso 1: Ingresar a la App',
            descripcion: 'Entra a Nequi con tu clave y número de celu, luego ve al signo "$" que está en la parte inferior derecha. Luego, haz clic en la opción "Envía".',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273465741'
        },
        {
            titulo: 'Paso 2: Seleccionar la Opción de Enviar Dinero',
            descripcion: 'En el menú principal, selecciona la opción "Enviar" para acceder a la función de enviar de dinero.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273477517'
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
            <Card className="m-3" style={{ width: '200px', height: '200px' }}>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Card.Title>Opciones</Card.Title>
                    <Button
                        style={{
                            backgroundColor: modo === 'recargar' ? '#9B005E' : '#DA0081',
                            color: 'rgb(255, 255, 255)',
                            borderColor: modo === 'recargar' ? 'rgb(0, 128, 0)' : 'rgb(0, 123, 255)'
                        }}
                        className="w-100 mb-2"
                        onClick={() => optionEnviar()}>
                        Transfiya
                    </Button>
                    <Button
                        style={{
                            backgroundColor: modo === 'retirar' ? '#9B005E' : '#DA0081',
                            color: 'rgb(255, 255, 255)',
                            borderColor: modo === 'retirar' ? 'rgb(0, 128, 0)' : 'rgb(0, 123, 255)'
                        }}

                        className="w-100"
                        onClick={() => optionRetirar()}>
                        Bancos
                    </Button>
                </Card.Body>
            </Card>

            <div className="d-flex justify-content-center vh-90 bg-light">
                {!modo ? (
                    <Card style={{ width: '35rem' }} className="shadow">
                        <Card.Body>
                            <Card.Title className="text-center">Selecciona una Opción</Card.Title>
                            <Card.Text>En esta sección encontrarás las siguientes opciones</Card.Text>
                            <div style={{ padding: '0.5rem', maxWidth: '10rem', marginLeft: '0' }}>
                                <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', margin: 0 }}>
                                    <li style={{ marginBottom: '0.5rem', padding: 0 }}>
                                        <a href="#" onClick={() => listEnviar()} className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
                                            Transfiya
                                        </a>
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', padding: 0 }}>
                                        <a href="#" onClick={() => listRetirar()} className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
                                            Bancos
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                ) : (
                    <Card style={{ width: '35rem', marginBottom: '0.5rem' }} className="shadow">
                        <Card.Img variant="top" src={imagen} style={{ width: '100%', height: '450px', objectFit: 'contain' }} />
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
                            <div ref={finalRef} /> {/* Referencia para el scroll */}
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    );
}

export default Funciones;
