import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Whatsapp from './Whatsapp'

const theme = {
    background: '#f5f8fb',
    headerBgColor: 'navy',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: 'navy',
    botFontColor: '#fff',
    userBubbleColor: '#0cb3c9',
    userFontColor: '#fff',
}

export default class Contenido extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot 
                    steps={[
                        {
                            id: "1",
                            message: "Bienvenido a DEVED, ¿Podria indicarme su nombre?",
                            trigger: "2",
                           
                        },
                        {
                            id: "2",
                            user: true,
                            trigger: "3",
                            
                        },
                        {
                            id: "3",
                            message: "Hola {previousValue}",
                            trigger: "4",
                          
                        },
                        {
                            id: "4",
                            message: "Muchas gracias por comunicarse con DEVED . Por favor indique el motivo por el cual nos contacta",
                            trigger: "5"
                        },
                        {
                            id: "5",
                            options: [
                                {value: "y", label: "Turno  ecografía o Eco Doppler", trigger: "6A"},
                                {value: "n", label: "Turno Radiografía", trigger: "6B"},
                                {value: "c", label: "Otras opciones", trigger: "6C"},
                            ]
                        },
                        {
                            id: "6A",
                            message: "Seleccione el tipo de estudio que desea realizar",
                            trigger: "seleccion"
                        },
                        {
                            id: "6B",
                            options: [
                                {value: "y", label: "Córdoba 4416 Veterinaria PET’S (Palermo)", trigger:"avcordoba"},
                                {value: "n", label: "Apolinario Figueroa 299 Veterinaria Merli (Villa Crespo)", trigger:"apolinario"},
                            ]
                           
                        },

                        {
                          id:"avcordoba",
                          message:"Los horarios de atención para Rx son lunes, martes, miércoles y viernes de 16 a 19 hs, si desea continuar le pedimos que adjunte foto de la orden o mencione el estudio a realizar. Muchas Gracias",
                          trigger:"aguarde"
                         
                        },
                        
                        
                        {
                            id:"apolinario",
                            message:"Los horarios de atención son de lunes a viernes de 16,30 a 19 hs y jueves y sábados a la mañana, si desea continuar le pedimos que adjunte foto de la orden o mencione el estudio a realizar",
                            trigger:"aguarde"
                          },
                          {
                            id:"adjuntafoto",
                            user:true,
                            message:"Le pedimos por favor adjunte foto de la orden del estudio para saber que estudio radiográfico e incidencias le piden. Si Ud. no tiene la orden puede mencionar a continuación que estudios le solicitan.",
                          },
                        {
                            id: "6C",
                            options: [
                                {value: "b1", label: "Cancelación de turno", trigger:"cancela"},
                                {value: "b2", label: "Cancelación y reprogramación de un turno", trigger:"cancelayrepro"},
                                {value: "b3", label: "Pasaron 24 hs y no recibí el informe", trigger:"pasaron24"},
                                {value: "b4", label: "Preparación para los diferentes estudios", trigger:"preparacion"},
                                {value: "b5", label: "Formas de pago", trigger:"formasdepago"},
                            ]
                           
                        },
                        {   
                            id:"cancela",
                            message: "Por favor especifique: Apellido, Día y horario, Lugar donde se le iba a realizar el estudio",    
                            trigger:"canceladatos"
                        },
                        {   
                            id:"cancelayrepro",
                            message: "Por favor especifique: Apellido, Día y horario, Lugar donde se le iba a realizar el estudio y para cuando quisiera hacer nuevamente el estudio",    
                            trigger:"canceladatos"
                        },

                        {   
                            id:"pasaron24",
                            message: "Por favor especifique: Apellido, Día y horario, Lugar donde se le iba a realizar el estudio, mail. Muchas Gracias",    
                            trigger:"canceladatos"
                        },
                        {   
                            id:"preparacion",
                            message: "La preparación para el estudio ecográfico es:-Ayuno de alimentos sólidos de como mínimo  4 hs - Puede beber el agua que desee- No debe orinar 1 hs antes del estudio. Para eso si es un felino debe esconder el baño sanitario y si es un canino debe restringir el acceso a los lugres donde normalmente hace pis ( en la medida de lo posible ) - Le solicitamos por favor lleve la orden médica para orientar al profesional que realizara el estudio- Si se encuentra tomando alguna medicación puede administrársela en la forma habitual. Muchas Gracias",    
                            trigger:"canceladatos"
                        },
                        {   
                            id:"formasdepago",
                            message: "Las honorarios pueden abonarse de las siguientes maneras - efectivo - tarjeta de debito- dinero en cuenta de mercado pago-transferencia bancaria realizada al momento del estudio. Muchas Gracias",    
                            trigger:"canceladatos"
                        },
                        {
                            id:"canceladatos",
                            user:true,
                            trigger:"operador",
                        },
                        {
                            id: "seleccion",
                            options: [
                                {value: "f1", label: "Ecografía abdominal", trigger: "9"},
                                {value: "f2", label: "Eco Doppler", trigger: "7B"},
                                {value: "f3", label: "Ecografía de tiroides", trigger: "9"},
                                {value: "f4", label: "Ecografía ocular", trigger: "9"},
                                {value: "f5", label: "Ecografía de partes blandas", trigger: "9"},
                                {value: "f6", label: "Ecografía de tórax no cardíaco", trigger: "9"},
                                {value: "f7", label: "Ecografía transcraneana", trigger: "9"},
                                {value: "f8", label: "Ecografía de abdomen y otro sector", trigger: "9"},
                            ],
                                
                          

                        },
                        {
                            id: "7A",
                            message: "Ha seleccionado ecografía abdominal",
                           
                        },
                        {
                            id: "7B",
                            options: [
                                { value:"consul1", label:"Villa Crespo", trigger: "seleccionBack"},
                                { value:"consul2", label:"Villa del Parque", trigger: "seleccionBack"},
                                { value:"consul3", label:"Palermo", trigger: "seleccionBack"},
                                { value:"consul4", label:"Belgrano", trigger: "seleccionBack"},
                                { value:"consul5", label:"Núñez", trigger: "seleccionBack"},
                        ],
                            
                        },

                        {
                            id: "7C",
                            message: "nnnn",
                            trigger: "seleccionBack"
                        },
                        {
                            id: "7D",
                            message: "nnn",
                            trigger: "seleccionBack"
                        },
                        {
                            id: "7E",
                            message: "mmm",
                            trigger: "seleccionBack"
                        },
                        {
                            id: "7F",
                            message: "nnn",
                            trigger: "seleccionBack"
                        },
                        {
                            id: "7G",
                            message: "vvv",
                            trigger: "seleccionBack"
                        },
                        {
                            id: "7H",
                            message: " Por favor indique qué estudio de abdomen y otro sector le solicitaron ",
                            trigger: "abdomenyotro"
                        },

                        {
                            id: "abdomenyotro",
                            options: [
                                {value: "Abdomen y tiroides", label:"Abdomen y tiroides"},
                                {value: "Abdomen y tórax", label: "Abdomen y tórax"},
                                {value: "Abdomen y ojo", label:"Abdomen y ojo"},
                                {value: "Abdomen y eco cardio", label:"Abdomen y eco cardio"},
                                {value: "Abdomen y Transcraneano", label:"Abdomen y Transcraneano"},
                                {value: "Abdomen y partes blandas",label:"Abdomen y partes blandas"},
                                {value: "Orden Médica",label:"Si posee orden médica adjunte foto, y si tiene preferencia con algún profesional indique su nombre"},
                            ]
                        },
                        {
                            id: "seleccionBack",
                            options: [
                                {value: "Abdomen", label: "Abdomen", trigger: "operador"},
                                {value: "Riñón", label: "Riñón", trigger: "operador"},
                                {value: "Hígado", label: "Hígado", trigger: "operador"},
                                {value: "Transcraneano", label: "Transcraneano", trigger: "operador"},
                                {value: "Tiroides", label: "Tiroides", trigger: "operador"},
                                {value: "Otro", label: "Otro", trigger: "operador"},
                            ]
                        },
                       
                        {
                            id: "9",
                            message: "Si posee orden médica adjunte foto)Seleccione el lugar donde desea hacer el estudio",
                            trigger: "lugarTurno",
                        }, 
                        {
                            id: "lugarTurno",
                            options: [
                                {value: "y", label: "Domicilio", trigger: "10A"},
                                {value: "n", label: "Consultorio", trigger: "10B"},
                                {value: "p", label: "Otras Opciones", trigger: "10C"},
                            ],
                        },
                        {
                            id: "10A",
                            message: "Indique en qué barrio vive",
                            trigger: "queBarrio",
                        }, 
                        {
                            id: "10B",
                        message: "En qué veterinaria se atiende o qué doctor le indica el estudio",
                            trigger: "veterinariaDoctor",
                        }, 
                        {
                            id: "10C",
                        message: "¿En qué veterinaria se  atiende o qué doctor le indica el estudio?",
                            trigger:"aguarde",
                         
                        }, 

                        {
                            id: "queBarrio",
                            user:true,
                            trigger:"aguarde1",
                            
                           
                        },
                        {
                            id: "aguarde1",
                            // message:"Aguarde unos instantes y un representante de DEVED se contactará con usted a la brevedad..",
                            component:<Whatsapp/>
                           
                        },
                        {
                            id: "veterinariaDoctor",
                            options: [
                                {value: "23", label: "Villa crespo", trigger: "vcrespo"},
                                {value: "24", label: "Palermo", trigger: "palermo"},
                                {value: "25", label: "Villa del Parque", trigger: "vdelparque"},
                                {value: "26", label: "Belgrano", trigger: "belgrano"},
                                {value: "27", label: "Villa Pueyrredón", trigger: "vpueyrredon"},
                                {value: "28", label: "Villa Santa Rita", trigger: "vsantarita"},
                                {value: "29", label: "Mataderos", trigger: "mataderos"},
                                {value: "30", label: "Almagro", trigger: "almagro"},
                                {value: "31", label: "Núnez", trigger: "nunez"},
                            ],
                        },
                        {
                            id: "vcrespo",
                            message: "Los horarios de atención son: lunes , martes , jueves y viernes de 16 a 20 hs y miércoles de 12 a 14 hs",
                            trigger: "datosParaturno",
                        }, 
                        {
                            id: "palermo",
                            message: "Los horarios de atención son: lunes , martes, miércoles y viernes de 16 a 19 hs . Jueves de 10 a 12 hs",
                            trigger: "datosParaturno",
                        }, 
                        {
                            id: "vdelparque",
                            message: "Los horarios de atención son: martes de 15 a 17 hs , jueves y viernes de 16 a 20hs",
                            trigger: "datosParaturno",
                        }, 
                        {
                            id: "belgrano",
                            message: "Los horarios de atención son Viernes de 16 a 19 hs y sábados de 10 a 13 hs ",
                            trigger: "datosParaturno",
                        }, 
                        {
                            id: "vpueyrredon",
                            message: "Los horarios de atención son:  lunes 14 a 16 hs y jueves de 16 a 18 hs",
                            trigger: "datosParaturno",
                        }, 
                        {
                            id: "vsantarita",
                            message: "Los horarios de atención son:  martes 16 a 18 hs y sábados de 10 a 13 hs",
                            trigger: "datosParaturno",
                        }, 
                        {
                            id: "mataderos",
                            message: "Los horarios de atención son: jueves de 15 a 18 hs",
                            trigger: "datosParaturno",
                        }, 
                        {
                            id: "almagro",
                            message: "Los horarios de atención son: Almagro martes jueves y sábados (horarios a convenir",
                            trigger: "datosParaturno",
                        }, 
                        {
                            id: "nunez",
                            message: "Los horarios de atención son: de 18 a 18.30 hs ",
                            trigger: "datosParaturno",
                        }, 
                        {
                            id: "datosParaturno",
                            options: [
                                {value: "30", label: "Continuar para confirmar turno", trigger: "datosPersonales"},
                                {value: "31", label: "Volver a seleccionar otro consultorio", trigger:"veterinariaDoctor"},
                             
                            ],
                        }, 
                        {
                            id: "datosPersonales",
                            message:"Por favor indique su nombre y apellido, día y horario de preferencia de turno",
                            trigger:"nombreApellido"
                        },
                        {
                          id:"aguarde",
                          user:true,
                          trigger:"operador",

                        },
                        {
                            id:"operador",
                            // message:"Su mensaje será respondido a la brevedad posible . Por favor aguarde en línea unos instantes y un representante de Deved se pondrá en contacto..."
                            component:<Whatsapp/>
                        },
                       
                        {
                            id: "nombreApellido",
                            user: true,
                            trigger:"muchasGracias"
                        },
                        {
                            id: "muchasGracias",
                            // message:"Aguarde unos instantes y un representante de DEVED se contactará con usted a la brevedad..",
                            component:<Whatsapp/>
                            
                        },

                    
                    ]}
                />
            </ThemeProvider>
        )
    }
}