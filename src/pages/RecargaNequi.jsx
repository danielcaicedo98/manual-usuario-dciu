import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './Styles.css'

function RecargaNequi() {
    const [modo, setModo] = useState(null); // 'recargar' o 'retirar'
    const [paso, setPaso] = useState(1);
    const finalRef = useRef(null);
    useEffect(() => {
        // Este código hace scroll hacia el top (arriba) solo una vez al montar el componente
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

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
            titulo: 'Paso 1: Abre la app de Nequi',
            descripcion: 'Inicia sesión en tu cuenta Nequi desde la aplicación.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/24303368420237'
        },
        {
            titulo: 'Paso 2: Accede al ícono de Pesos',
            descripcion: 'En la pantalla de inicio, toca el ícono con el signo Pesos 💲 que está en la esquina inferior derecha.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/24303368435597'
        },
        {
            titulo: 'Paso 3: Elige "Recarga Nequi"',
            descripcion: 'Selecciona la opción "Recarga Nequi" del menú que aparece.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/24303383850637'
        },
        {
            titulo: 'Paso 4: Selecciona "Desde otro banco"',
            descripcion: 'Dentro del menú de recargas, elige la tercera opción: "Desde otro banco".',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/24303368466957'
        },
        {
            titulo: 'Paso 5: Completa la información requerida',
            descripcion: 'Escribe los datos que la app solicita para realizar la transacción.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/24303368480013'
        },
        {
            titulo: 'Paso 6: Serás redirigido',
            descripcion: 'Serás redirigido al sistema PSE, donde deberás tener tu correo registrado',
            imagen: '/assets/imagenes/redireccion_pse.png'
        },
        {
            titulo: 'Paso 7: Autoriza la transacción',
            descripcion: 'Después entrarás a la página de tu banco, autorizas la transacción y listo.',
            imagen: '/assets/imagenes/autorizacion_pse.png'
        },
        {
            titulo: 'Opción alternativa: Recarga desde la web',
            descripcion:
                <div>
                    <p>
                        También puedes recargar desde <a href="https://www.nequi.com.co/" target="_blank">la pagina de nequi</a> seleccionando el botón "Recarga" y siguiendo los mismos pasos.
                    </p>
                </div>
            ,
            imagen: '/assets/imagenes/recarga_web.png'
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
            imagen: '/assets/gifts/punto_fisico.gif'
        },
        {
            titulo: 'Paso 5: Recarga con efectivo',
            descripcion:
                <div>
                    <p>Dile al encargado que vas a recargar tu Nequi:</p>
                    <ul>
                        <li>Tu numero de celular es el numero para recargar tu Nequi</li>
                        <li>Lo mínimo que puedes recargas es $10.000</li>
                    </ul>
                    <p>¡Listo! verifica que el dinero esté en tu cuenta de Nequi.</p>
                </div>,
            imagen: 'https://www.bancow.com.co/wp-content/uploads/2018/03/f-microempresario-3.jpg'
        }
    ];

    const pasosBancos = [
        {
            titulo: '¡Convierte tus códigos en plata con Nequi!',
            descripcion: 'Canjear tus códigos por dinero en tu saldo disponible es rápido y sencillo. Si tienes un código proporcionado por una marca, comercio o promoción asociada a Nequi, sigue estos pasos para disfrutar de tu dinero extra.',
            imagen: 'https://cdn.prod.website-files.com/63500c9a931741e8e7d2687e/665e3768a7ce0bfd5fe2d86b_Que%CC%81%20es%20Nequi.png'
        },
        {
            titulo: 'Paso 1: Abre la app y busca el ícono de Pesos',
            descripcion: 'Encuentra el ícono con el signo Pesos 💲 en la esquina inferior derecha de la pantalla de inicio.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/27013059072525'
        },
        {
            titulo: 'Paso 2: Selecciona Recarga Nequi',
            descripcion: 'En el menu que te aparece selecciona la opcion que dice Recarga Nequi',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168232740749'
        },
        {
            titulo: 'Paso 3: Selecciona "Codigo de regalo"',
            descripcion: 'Elige la opción "Código de regalo" para recargar usando un código de regalo ',
            imagen: '/assets/imagenes/recarga.png'
        },
        {
            titulo: 'Paso 4: Ingresa tu código',
            descripcion: (
                <div style={{ fontFamily: 'Arial, sans-serif' }}>
                    <p>Escribe el código en el campo indicado para validar su vigencia.</p>
                    <ul>
                        <li><strong>Ten en cuenta:</strong> Los códigos son únicos y solo se pueden redimir una vez.</li>
                        <li>Verifica la vigencia del código, ya que depende de las campañas de las marcas aliadas o promociones de Nequi.</li>
                    </ul>
                </div>
            ),
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/27013090976909'
        },
        {
            titulo: 'Paso 4: Recibe tu dinero al instante',
            descripcion: 'Si el código es válido, el dinero se reflejará de inmediato en tu saldo disponible. ¡Así de fácil!',
            imagen: '/assets/imagenes/listo.jpg'
        }
    ];

    const pasosEliminar = [
        {
            titulo: 'Requisitos para usar Plata al toque',
            descripcion:
                <div style={{ fontFamily: 'Arial, sans-serif' }}>
                    {/* <h2>Requisitos para usar Plata al toque</h2> */}
                    <p>Antes de hacer uso de Plata al toque, revisa los siguientes puntos:</p>
                    <ol>
                        <li><strong>Debes ser mayor de edad y tener cédula de ciudadanía.</strong></li>
                        <li><strong>Tener una cuenta Bancolombia a tu nombre.</strong> (mismo titular Nequi – mismo titular Bancolombia)</li>
                        <li>
                            <strong>Si te aparece que aún no tenemos esta opción disponible para ti,</strong> cuando nos conozcamos mejor estará habilitada. Mientras tanto, te invitamos a recargar Nequi por la App Personas Bancolombia o por PSE.
                        </li>
                        <li>
                            <strong>La opción de alertas y notificaciones de tu cuenta Bancolombia debe estar activa.</strong> Si no lo está, no se podrá habilitar este servicio. En caso de no saber cómo activarlo, te recomendamos comunicarte con Bancolombia para que conozcas el paso a paso y actives esta opción.
                        </li>
                        <li><strong>Plata al toque te ayudará a recargar máximo $300.000 al día y hasta $2.000.000 en el mes.</strong></li>
                        <li><strong>Es completamente gratis</strong> y no tienes que pensar en 4x1.000.</li>
                        <li><strong>Recuerda que las recargas por Plata al toque son inmediatas.</strong></li>
                    </ol>
                </div>
            ,
            imagen: 'https://files.lafm.com.co/assets/public/styles/facebook2/public/2021-12/nequi_fuera_de_bancolombia_0.jpg.webp?VersionId=7ib7kFuPlRWQaaFAINmlK0scnTtGjvfw&itok=FO47c9Ah'
        },
        {
            titulo: 'Paso 1: Ingresa a Nequi',
            descripcion: 'Entra en la app de Nequi usando tus credenciales',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168232736397'
        },
        {
            titulo: 'Paso 2: Accede al Menú de Envíos',
            descripcion: 'En la pantalla de inicio, toca el símbolo "$" que se encuentra en la esquina inferior derecha.',
            imagen: 'https://ayuda.nequi.com.co/hc/article_attachments/30168232740749'
        },
        {
            titulo: 'Paso 3: Selecciona "Recarga"',
            descripcion: 'Elige la opción "Recarga" y luego selecciona "Plata al Toque" para recargar desde tu cuenta Bancolombia. Selecciona el monto y ¡Listo!',
            imagen: '/assets/imagenes/recarga.png'
        },
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
                        Desde Otro Banco
                    </Button>
                    <Button
                        style={{
                            backgroundColor: modo === 'transfiya' ? '#9B005E' : '#DA0081',
                            color: 'rgb(255, 255, 255)',
                            borderColor: modo === 'transfiya' ? 'rgb(0, 128, 0)' : 'rgb(0, 123, 255)'
                        }}
                        className="w-100"
                        onClick={() => optionTransfiya()}>
                        Con Efectivo
                    </Button>
                    <Button
                        style={{
                            backgroundColor: modo === 'bancos' ? '#9B005E' : '#DA0081',
                            color: 'rgb(255, 255, 255)',
                            borderColor: modo === 'bancos' ? 'rgb(0, 128, 0)' : 'rgb(0, 123, 255)'
                        }}

                        className="w-100"
                        onClick={() => optionBancos()}>
                        Código Regalo
                    </Button>
                    <Button
                        style={{
                            backgroundColor: modo === 'eliminar' ? '#9B005E' : '#DA0081',
                            color: 'rgb(255, 255, 255)',
                            borderColor: modo === 'eliminar' ? 'rgb(0, 128, 0)' : 'rgb(0, 123, 255)'
                        }}

                        className="w-100"
                        onClick={() => optionEliminar()}>
                        Plata al Toque
                    </Button>
                </Card.Body>
            </Card>

            <div className="d-flex justify-content-center vh-90 bg-light">
                {!modo ? (
                    <Card style={{ width: '35rem' }} className="shadow">
                        <Card.Body>
                            <Card.Title className="text-center p-3">Recarga tu Nequi</Card.Title>
                            <Card.Text className='text-justify m-3'>Con Nequi, recargar dinero es rápido y sencillo. Solo necesitas seleccionar el método que prefieras: desde tu cuenta bancaria, puntos físicos aliados o transferencias de otros usuarios Nequi. Administra tus finanzas al instante, sin costos adicionales, y mantén tu saldo disponible para realizar pagos, ahorrar o alcanzar tus metas financieras. ¡Todo desde la palma de tu mano!. Para conocer más te damos las siguientes opciones:
                            </Card.Text>
                            <div style={{ padding: '0.1rem', maxWidth: '15rem', marginLeft: '0' }}>
                                <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', margin: 0 }}>
                                    <li style={{ marginBottom: '0.5rem', padding: 0 }}>
                                        <a href="#" onClick={() => listNequi()} className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
                                            ¿Cómo recargar desde otro banco?
                                        </a>
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', padding: 0 }}>
                                        <a href="#" onClick={() => listTransfiya()} className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
                                            ¿Cómo recargar en efectivo?
                                        </a>
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', padding: 0 }}>
                                        <a href="#" onClick={() => listBancos()} className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
                                            ¿Cómo recargar con código de regalo?
                                        </a>
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', padding: 0 }}>
                                        <a href="#" onClick={() => listEliminar()} className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
                                            ¿Cómo recargar desde plata al toque?
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
