import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './Styles.css'

function RecargaNequi() {
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

    const optionEliminar = () => {
        setModo('eliminar');
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

    const listEliminar = () => {
        setModo('eliminar');
        setTimeout(() => {
            finalRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const pasosNequi = [
        {
            titulo: '1. Recibir Dinero por Transfiya',
            descripcion: 'Cuando alguien te envía dinero por Transfiya, normalmente tienes 12 horas para entrar a Nequi y aceptar el dinero. Si no aceptas el dinero en ese plazo, este se devolverá automáticamente a la cuenta de tu amigo.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273465741'
        },
        {
            titulo: '2. Automatizar la Recepción con Relaciones de Confianza',
            descripcion: 'Si deseas que el dinero de ciertos amigos se acredite automáticamente sin tener que aceptarlo cada vez, puedes establecer una relación de confianza con ellos.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273477517'
        },
        {
            titulo: '3. Crear una Relación de Confianza',
            descripcion: 'Después de recibir dinero por primera vez de un amigo, la app te dará la opción de "Crear relación de confianza" con esa persona. Una vez creada la relación, los envíos futuros de esa persona se acreditarán en tu cuenta automáticamente.',
            imagen: '/assets/gifts/gift_transfiya1.gif'
        }
    ];

    const pasosTransfiya = [
        {
            titulo: 'Entiende qué son los Corresponsales de Nequi',
            descripcion: 'Los corresponsales son puntos físicos ubicados en tiendas, almacenes y otros comercios aliados donde puedes recargar o retirar efectivo de tu cuenta Nequi. Son una opción práctica y accesible para gestionar tu dinero.',
            imagen: 'https://www.radioacktiva.com/wp-content/uploads/2024/02/08022024-nequi.jpg'
        },
        {
            titulo: 'Paso 1: Identifica los Corresponsales para Recargar tu Nequi',
            descripcion:
                <div>
                    <p>Puedes recargar tu Nequi de dos maneras:</p>
                    <ul>
                        <li>A través de los corresponsales bancarios de Bancolombia.</li>
                        <li>A través de los corresponsales Nequi, que son puntos aliados de PTM y Puntored.</li>
                    </ul>
                    <p>Estos puntos están marcados con los logos de Nequi o de los aliados, lo que te facilitará identificarlos rápidamente.</p>
                </div>,
            imagen: '/assets/imagenes/ptm_puntored.png'
        },
        {
            titulo: 'Paso 2: Usa el Mapa en Línea para Encontrar Corresponsales Bancolombia',
            descripcion:
                <div>
                    <p>
                        Si prefieres los corresponsales de Bancolombia, puedes <a href="https://www.bancolombia.com/puntos-de-atencion/buscar-en-mapa" target="_blank">consultar el mapa interactivo en línea</a> para encontrar las ubicaciones de los cajeros y corresponsales más cercanos. Accede a la plataforma de Bancolombia y usa el mapa para encontrar estos puntos de manera fácil y rápida.
                    </p>
                </div>

            ,
            imagen: '/assets/imagenes/mapa_bancolombia.png'
        },
        {
            titulo: 'Paso 3: Encuentra Puntos Físicos a Través de Puntored',
            descripcion:
                <div>
                    <p>
                        Si buscas corresponsales de Nequi a través de Puntored, <a href="https://geo-nequi.puntored.co/" target="_blank">puedes visitar su sitio web</a>. Filtra los puntos físicos por "Depósitos y Retiros Nequi" en la categoría de productos y servicios para obtener la lista de corresponsales disponibles.
                    </p>
                </div>
        ,
            imagen: '/assets/imagenes/mapa_puntored.png'
        },
        {
            titulo: 'Paso 4: Consulta los Puntos Físicos de PTM',
            descripcion: 'Otra opción es consultar directamente los puntos físicos de PTM (Pago Todo Móvil). Esta red también te permite realizar recargas en efectivo de tu Nequi.',
            imagen: '/assets/imagenes/ptm.jpg'
        },
        {
            titulo: 'Paso 5: Utiliza la App Nequi para Encontrar Corresponsales Cercanos',
            descripcion:
                <div>
                    <p>Una de las formas más cómodas de encontrar corresponsales es a través de la app Nequi. Activa la geolocalización (GPS) en tu celular y sigue estos pasos:</p>
                    <ul>
                        <li>Abre la app Nequi y dirígete al ícono con el signo "$".</li>
                        <li>Elige la opción de "recarga Nequi".</li>
                        <li>Selecciona la opción "con efectivo en corresponsales".</li>
                        <li>Haz clic en "ver puntos de recarga".</li>
                        <li>Se mostrará un mapa con los corresponsales más cercanos a tu ubicación.</li>
                    </ul>
                </div>,
            imagen: '/assets/imagenes/app_nequi_corresponsales.jpg'
        }
    ];

    const pasosBancos = [
        {
            titulo: 'Paso 1: Accede a Ajustes',
            descripcion: 'Abre la app Nequi e inicia sesión. Luego, ve a "Ajustes" en el menú principal y selecciona "Tu Nequi".',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273465741'
        },
        {
            titulo: 'Paso 2: Administra tus Favoritos en Transfiya',
            descripcion: 'Busca la opción "Transfiya: Administra tus favoritos" dentro de la sección de ajustes.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273477517'
        },
        {
            titulo: 'Paso 3: Consulta tus Relaciones de Confianza',
            descripcion: 'Selecciona la tarjeta "Relaciones de confianza". Sigue las instrucciones y verás el listado de amigos que tienes como relaciones de confianza. Esto te permitirá ver fácilmente las personas que has marcado para recibir dinero automáticamente en tu cuenta Nequi.',
            imagen: '/assets/gifts/gift_transfiya1.gif'
        }
    ];

    const pasosEliminar = [
        {
            titulo: 'Quiero eliminar mi relación de confianza',
            descripcion: 'Si ya no deseas que el dinero de un amigo se acredite automáticamente en tu cuenta, puedes eliminar la relación de confianza de forma sencilla.',
            imagen: 'https://www.las2orillas.co/wp-content/uploads/2023/10/cambios-nequi.jpg'
        },
        {
            titulo: 'Paso 1: Accede a la Lista',
            descripcion: 'Accede a la lista de relaciones de confianza en la app Nequi.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273465741'
        },
        {
            titulo: 'Paso 2: Busca la Relación',
            descripcion: 'Busca el amigo que deseas eliminar de tu lista de relaciones de confianza.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168273477517'
        },
        {
            titulo: 'Paso 3: Elimina la Relación',
            descripcion: 'Toca el ícono de la papelera junto al nombre del amigo para eliminar la relación de confianza.',
            imagen: '/assets/gifts/gift_transfiya1.gif'
        },
        {
            titulo: '¿Qué pasa después?',
            descripcion: 'Una vez eliminada la relación, la próxima vez que esa persona te envíe dinero, tendrás que entrar a Nequi y aceptar el envío como si fuera la primera vez.',
            imagen: '/assets/imagenes/relacion_eliminada.jpg'
        }
    ]


    // Selecciona los pasos según el modo actual (recargar o retirar)
    const pasos = modo === 'nequi' ? pasosNequi : modo === 'transfiya' ? pasosTransfiya : modo === 'bancos' ? pasosBancos : pasosEliminar;
    const { titulo, descripcion, imagen } = pasos[paso - 1] || {};

    return (
        <div className='justify-content-center d-flex vh-10'>
            <Card className="m-3" style={{ width: '200px', height: '250px' }}>
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
                        ¿Cómo Funciona?
                    </Button>
                    <Button
                        style={{
                            backgroundColor: modo === 'transfiya' ? '#9B005E' : '#DA0081',
                            color: 'rgb(255, 255, 255)',
                            borderColor: modo === 'transfiya' ? 'rgb(0, 128, 0)' : 'rgb(0, 123, 255)'
                        }}
                        className="w-100"
                        onClick={() => optionTransfiya()}>
                        Pasos
                    </Button>
                    <Button
                        style={{
                            backgroundColor: modo === 'bancos' ? '#9B005E' : '#DA0081',
                            color: 'rgb(255, 255, 255)',
                            borderColor: modo === 'bancos' ? 'rgb(0, 128, 0)' : 'rgb(0, 123, 255)'
                        }}

                        className="w-100"
                        onClick={() => optionBancos()}>
                        Ver Mis Relaciones
                    </Button>
                    <Button
                        style={{
                            backgroundColor: modo === 'eliminar' ? '#9B005E' : '#DA0081',
                            color: 'rgb(255, 255, 255)',
                            borderColor: modo === 'eliminar' ? 'rgb(0, 128, 0)' : 'rgb(0, 123, 255)'
                        }}

                        className="w-100"
                        onClick={() => optionEliminar()}>
                        Eliminar Relaciones
                    </Button>
                </Card.Body>
            </Card>

            <div className="d-flex justify-content-center vh-90 bg-light">
                {!modo ? (
                    <Card style={{ width: '35rem' }} className="shadow">
                        <Card.Body>
                            <Card.Title className="text-center p-3">Relaciones de confianza</Card.Title>
                            <Card.Text className='text-justify m-3'>¿Qué es una relación de confianza?
                                Es una conexión que puedes establecer con amigos de confianza para que, cuando te envíen dinero a través de Transfiya, el dinero se acreditará automáticamente en tu cuenta Nequi sin necesidad de que lo aceptes manualmente. Para concer más te damos las siguientes opciones:
                            </Card.Text>
                            <div style={{ padding: '0.1rem', maxWidth: '15rem', marginLeft: '0' }}>
                                <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', margin: 0 }}>
                                    <li style={{ marginBottom: '0.5rem', padding: 0 }}>
                                        <a href="#" onClick={() => listNequi()} className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
                                            ¿Cómo Funciona?
                                        </a>
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', padding: 0 }}>
                                        <a href="#" onClick={() => listTransfiya()} className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
                                            Pasos para configurarlos
                                        </a>
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', padding: 0 }}>
                                        <a href="#" onClick={() => listBancos()} className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
                                            ¿Cómo ver mis relaciones de confianza?
                                        </a>
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', padding: 0 }}>
                                        <a href="#" onClick={() => listEliminar()} className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
                                            ¿Cómo eliminar mis relaciones de confianza?
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
                            <Card.Text className='text-justify pr-5 pl-2'>{descripcion}</Card.Text>
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

export default RecargaNequi;