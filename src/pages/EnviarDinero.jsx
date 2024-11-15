import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './Styles.css'
// import '../../public/assets/gifts/gift_transfiya1.gif'

function EnviarDinero() {
    const [modo, setModo] = useState(null); // 'recargar' o 'retirar'
    const [paso, setPaso] = useState(1);
    const finalRef = useRef(null);

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

    const optionBancos = () => {
        setModo('bancos');
        setPaso(1);
        setTimeout(() => {
            finalRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const listNequi = () => {
        setModo('nequi');
        setTimeout(() => {
            finalRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const listBancos = () => {
        setModo('bancos');
        setTimeout(() => {
            finalRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const listTransfiya = () => {
        setModo('transfiya');
        setTimeout(() => {
            finalRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };
    const bancos = [
        'Banco de Bogotá', 'Banco Itaú', 'Bancolombia', 'BBVA Colombia', 'Scotiabank Colpatria',
        'Banco de Occidente', 'Banco Caja Social', 'Banco Davivienda', 'Banco AV Villas',
        'Banco Falabella', 'Banco Coopcentral', 'Confiar Cooperativa Financiera', 'NEQUI', 'Daviplata',
        'Movii', 'Banco Agrario', 'Bancamía S.A.', 'Banco Serfinanza', 'Finandina', 'DALE'
    ];

    const pasosNequi = [
        {
            titulo: 'Paso 1: Ingresa a la App Nequi',
            descripcion: 'Abre la app de Nequi e inicia sesión. En la pantalla de inicio, busca el símbolo "$" ubicado en la parte inferior derecha.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168232736397'
        },
        {
            titulo: 'Paso 2: Selecciona "Envía"',
            descripcion: 'Toca la opción "Envía" y, dentro de las opciones disponibles, selecciona "Nequi" para enviar plata a otra cuenta Nequi.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273477517'
        },
        {
            titulo: 'Paso 3: Completa los Datos de Envío',
            descripcion: 'Escribe el número de celular de la persona a quien deseas enviar la plata, el monto a transferir y, si quieres, un pequeño mensaje.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/24408219344013'

        },
        {
            titulo: 'Paso 4: Usa tus Contactos para Mayor Rapidez',
            descripcion:
                <div className="instrucciones-container">
                    <h2>Instrucciones para Enviar Plata</h2>
                    <p>
                        Si tienes el número de la persona guardado en tus contactos del celular, el proceso será más rápido. Sigue estos pasos:
                    </p>
                    <ol>
                        <li>Toca la opción para buscar contactos desde la app.</li>
                        <li>Selecciona el nombre de la persona a quien deseas enviar la plata.</li>
                        <li>Confirma que el número de celular asociado a su Nequi sea el correcto.</li>
                    </ol>
                    <p>
                        Esto te ahorrará tiempo, ya que no tendrás que escribir el número manualmente.
                    </p>
                </div>
            , imagen: '/assets/gifts/BuscarContactoNequi.gif'
        }
    ]

    // Contenido de cada paso para recargar
    const pasosTransfiya = [
        {
            titulo: 'Paso 1: Ingresa a Nequi',
            descripcion: 'Abre la app de Nequi e inicia sesión con tu número de celular y clave. Una vez dentro, toca el símbolo "$" en la parte inferior derecha y selecciona "Envía".',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273465741'
        },
        {
            titulo: 'Paso 2: Elige Transfiya',
            descripcion: 'En la pantalla de opciones, selecciona la opción "Transfiya" para enviar plata a otra cuenta de manera rápida.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273477517'
        },
        {
            titulo: 'Paso 3: Ingresa los Datos de Envío',
            descripcion: 'Escribe el número de celular de la persona a la que vas a enviar dinero. Luego, ingresa el valor a enviar en "¿Cuánto?", añade un mensaje opcional si deseas y selecciona la cuenta de origen de los fondos. Revisa que toda la información esté correcta y toca "Sigue".',
            imagen: '/assets/gifts/gift_transfiya1.gif'

        },
        {
            titulo: 'Paso 4: ¡Listo! Envío en Proceso',
            descripcion: 'El dinero ya fue enviado. Tu amigo tiene hasta 12 horas para aceptar el dinero, de lo contrario, este regresará automáticamente a tu cuenta Nequi.',
            imagen: '/assets/imagenes/listo.jpg'
        },
        {
            titulo: 'Opciones para Recibir Dinero en Transfiya',
            descripcion:
                <div>
                    <p style={{ textAlign: 'justify' }}>
                        Transfiya ofrece dos modalidades para facilitar la recepción de dinero:
                    </p>
                    <ul style={{ textAlign: 'justify', paddingRight: '50px' }}>
                        <li><strong >Cuenta Favorita:</strong> Si la persona a quien envías tiene una cuenta favorita inscrita, el dinero le llegará automáticamente a esa cuenta.</li>
                        <br />
                        <li><strong>Relación de Confianza:</strong> Si ya le has enviado dinero antes y ha creado una relación de confianza, el dinero también le llegará de forma automática al banco donde usualmente recibe tus envíos.</li>
                    </ul>
                    <p style={{ textAlign: 'justify' }}>
                        Si la persona no tiene cuenta favorita ni relación de confianza, podrá elegir en qué banco recibir el dinero.
                    </p>
                </div>

            , imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/23129609867149'
        },
        {
            titulo: 'Importante',
            descripcion:
                <div className="container">
                    <p className="note">
                        <strong>Nota Importante:</strong> Recuerda que el límite diario de envíos es de $3.000.000 o 15 transacciones, lo primero que se cumpla.
                    </p>
                    <p className="title">
                        <strong>Bancos Compatibles con Transfiya:</strong>
                    </p>
                    <ul className="bancos-list">
                        {bancos.map((banco, index) => (
                            <li key={index} className="banco-item">{banco}</li>
                        ))}
                    </ul>
                </div>
            , imagen: '/assets/imagenes/bancos_nequi.jpeg'
        }
    ];

    // Contenido de cada paso para retirar
    const pasosBancos = [
        {
            titulo: 'Paso 1: Ingresa a Nequi',
            descripcion: 'Entra en la app de Nequi',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168232736397'
        },
        {
            titulo: 'Paso 2: Accede al Menú de Envíos',
            descripcion: 'En la pantalla de inicio, toca el símbolo "$" que se encuentra en la esquina inferior derecha.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168232740749'
        },
        {
            titulo: 'Paso 3: Selecciona "Envía" y Escoge "Bancos"',
            descripcion: 'Elige la opción "Envía" y luego selecciona "Bancos" para hacer el envío a otra cuenta bancaria.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168232744717'
        },
        {
            titulo: 'Paso 4: Elige el Banco de Destino',
            descripcion: 'Selecciona el banco al que quieres enviar dinero. Recuerda que, si envías a una cuenta de Bancolombia, la transferencia es gratuita y se realiza de inmediato.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273509901'
        },
        {
            titulo: 'Paso 5: Completa la Información de Envío',
            descripcion: 'Ingresa los datos que se te solicitan, como el nombre del destinatario y el monto a transferir.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273513741'
        }
        ,
        {
            titulo: 'Paso 6: Confirma y Envía',
            descripcion: 'Revisa que toda la información esté correcta y toca "Enviar". ¡Listo! La transferencia ha sido realizada.',
            imagen: '/assets/imagenes/listo.jpg'
        }
        ,
        {
            titulo: 'Paso 7: Verifica los Detalles de la Transacción',
            descripcion: 'En la pantalla final, podrás ver el detalle completo de la transacción, incluyendo el monto y el banco de destino.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168232764173'
        }
    ];

    // Selecciona los pasos según el modo actual (recargar o retirar)
    const pasos = modo === 'nequi' ? pasosNequi : modo === 'transfiya' ? pasosTransfiya : pasosBancos;
    const { titulo, descripcion, imagen } = pasos[paso - 1] || {};

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
                    <Button
                        style={{
                            backgroundColor: modo === 'bancos' ? '#9B005E' : '#DA0081',
                            color: 'rgb(255, 255, 255)',
                            borderColor: modo === 'bancos' ? 'rgb(0, 128, 0)' : 'rgb(0, 123, 255)'
                        }}

                        className="w-100"
                        onClick={() => optionBancos()}>
                        Bancos
                    </Button>
                </Card.Body>
            </Card>

            <div className="d-flex justify-content-center vh-90 bg-light">
                {!modo ? (
                    <Card style={{ width: '35rem' }} className="shadow">
                        <Card.Body>
                            <Card.Title className="text-center p-3">Envíos a otros bancos: ¡Fácil, rápido y seguro con Nequi!</Card.Title>
                            <Card.Text className='text-justify m-3'>En Nequi, puedes elegir entre tres opciones para enviar plata: Nequi, Transfiya y Bancos. Cada una de estas opciones te permite transferir dinero de forma rápida y sencilla, pero tienen características diferentes que te explicamos a continuación:</Card.Text>
                            <div style={{ padding: '0.5rem', maxWidth: '10rem', marginLeft: '0' }}>
                                <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', margin: 0 }}>
                                    <li style={{ marginBottom: '0.5rem', padding: 0 }}>
                                        <a href="#" onClick={() => listNequi()} className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
                                            Nequi
                                        </a>
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', padding: 0 }}>
                                        <a href="#" onClick={() => listTransfiya()} className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
                                            Transfiya
                                        </a>
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', padding: 0 }}>
                                        <a href="#" onClick={() => listBancos()} className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
                                            Bancos
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                ) : (
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
                )}
            </div>
        </div>
    );
}

export default EnviarDinero;
