import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './Styles.css'
// import '../../public/assets/gifts/gift_transfiya1.gif'

function SacarDinero() {
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
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273465741'
        },
        {
            titulo: 'Paso 2: Accede al Menú de Retiros',
            descripcion: 'Selecciona el ícono del signo "$" en la parte inferior de la pantalla. Y dentro del menú, selecciona la opción "Saca".',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273477517'
        },
        {
            titulo: 'Paso 3: Selecciona el Método de Retiro',
            descripcion: 'Elige si deseas retirar el dinero en "Cajeros" o en "Puntos físicos" (corresponsales).',
            imagen: '/assets/gifts/gift_transfiya1.gif'
        },
        {
            titulo: 'Paso 4: Genera tu Código de Retiro',
            descripcion: 'Automáticamente se generará un código de 6 dígitos que será visible en la app durante 30 minutos. Este código lo necesitarás para completar el retiro.',
            imagen: '/assets/imagenes/codigo_retiro.jpg'
        },
        {
            titulo: 'Paso 5: Realiza el Retiro',
            descripcion:
                <div>
                    <p style={{ textAlign: 'justify' }}>
                        Para completar el retiro, sigue estas instrucciones según el método que hayas elegido:
                    </p>
                    <ul style={{ textAlign: 'justify', paddingRight: '50px' }}>
                        <li><strong>En un Cajero:</strong> Ingresa el código de 6 dígitos que aparece en la app para retirar el dinero.</li>
                        <li><strong>En un Punto Físico:</strong> Muestra el código al corresponsal para completar el retiro.</li>
                    </ul>
                </div>,
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273465742'
        },
        {
            titulo: 'Paso 6: Si el Saldo es Menor a $10,000 COP',
            descripcion: 'Si el saldo disponible es menor a $10,000 COP, la app mostrará un mensaje que dice: "¡No te alcanza para sacar plata!". Para completar el retiro, deberás recargar la cantidad faltante en tu saldo disponible o en el bolsillo que hayas seleccionado.',
            imagen: '/assets/imagenes/saldo_insuficiente.jpg'
        }
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

export default SacarDinero
