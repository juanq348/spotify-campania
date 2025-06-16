import '../styles/preguntas.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import flecha from "../assets/img/flecha.png"
import signoPregunta from "../assets/img/signo-pregunta.png"

const preguntas = [
    {
        pregunta: '¿Como funciona la prueba de Spotify Premium?',
        respuesta: 'Si nunca tuviste un plan Premium, puede que cumplas con los requisitos para obtener una prueba gratuita (o de precio reducido). Tenes que ingresar un método de pago válido para registrarte y usar las pruebas. Con esta información se verificara tu país o región y procesar los pagos si querés mantener tu plan Premium luego de que finalice la prueba gratuita. Se enviara un recordatorio 7 días antes de que finalice la prueba. Se aplican restricciones y términos por país.'
    },
    {
        pregunta:'¿Cómo puedo cancelar mi plan Premium?',
        respuesta:'Podes cancelar tu plan Premium fácilmente y en cualquier momento en línea desde la página de tu cuenta. Cuando se cancelan las suscripciones pagas de Premium, permanecen activas hasta la siguiente fecha de facturación. Luego, la cuenta pasa al servicio gratuito.'
    },
    {
        pregunta:'¿Puedo usar mi cuenta Premium en varios dispositivos?',
        respuesta:'Sí que podes, pero no vas a poder reproducir músico al mismo tiempo en más de un dispositivo.'
    },
    {
        pregunta:'¿Como funciona el plan Premium Duo?',
        respuesta:'Premium Duo es un plan para parejas. En comparación con tener dos cuentas Premium Individual de precio completo, también es más barato. Se requiere de la dirección de ambas personas. Se puede invitar a los otros miembros del plan a unirse en el momento que se realiza la compra. Cada miembro obtiene su cuenta individual y puede escuchar contenido al mismo tiempo con su propia cuenta.'
    },
    {
        pregunta:'¿Cómo funciona el plan Premium Familiar?',
        respuesta:'Premium Familiar es una plan para hasta 6 miembros de la familia que conviven. Comparado con que cada miembro de la familia tenga una cuenta Premium Individual es mucho más barato. Se requiere de la dirección de los miembros de la familia. Se puede invitar a los otros miembros del plan a unirse en el momento que se realiza la compra. Cada miembro obtiene su cuenta individual y puede escuchar contenido al mismo tiempo con su propia cuenta.'
    },
    {
        pregunta:'¿Cómo funciona el plan Premium para Estudiantes?',
        respuesta:'Si sos estudiante de una institución de educación superior acreditada y sos mayor de 18 años, entonces sí. Podes obtener Premium para Estudiantes hasta por 4 años.'
    }
]

export default function Preguntas(){
    const [activa, setActiva] = useState(null)

    const toggle = (i) => {
        setActiva(activa === i ? null : i)
    }

    return(
        <div className="preguntas-contenedor">
            <div className="titulo-preguntas">
                <img src={signoPregunta} className='signo-pregunta'/>
                <h1>Preguntas Frecuentes</h1>
            </div>
            {preguntas.map((item, i) =>(
                <motion.div key={i} className = "pregunta-item" onClick={() => toggle(i)} initial={false} animate={{backgroundColor: activa === i ? '#1f1f1f' : 'transparent'}} transition={{duration: 0.3}}>

                    <motion.div className="pregunta" layout>
                        <h2>{item.pregunta}</h2>
                        <motion.img src={flecha} className='flecha' animate={{ rotate: activa === i ? -180 : 0 }} transition={{ duration:0.3 }}/>
                    </motion.div>
                    <AnimatePresence initial={false} mode="wait">
                        {activa === i && (
                            <motion.div 
                                key="respuesta"
                                className='respuesta-wrapper'
                                layout
                                initial={{opacity:0}} 
                                animate={{opacity:1}} 
                                transition={{duration: 0.3}}
                            >
                                <div className="respuesta">
                                    <p>{item.respuesta}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    )
}