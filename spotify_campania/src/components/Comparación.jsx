import '../styles/comparacion.css'
import equis from '../assets/img/cross.png'
import tick from '../assets/img/checked.png'
import logo from '../assets/img/logo.png'
import { motion } from 'framer-motion'

const filaVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.4 }
    })
}

export default function Comparacion() {
    const beneficios = [
        "Música sin anuncios",
        "Descargá y escucha contenido en modo offline",
        "Reproducí canciones en el orden que quieras",
        "Audio de alta calidad",
        "Saltos ilimitados",
        "Organizá la fila de reproducción"
    ]

    return (
        <motion.div 
            className="comparacion-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="comparacion">
                <div className="encabezado" style={{ borderBottom: "3px solid white", paddingBottom: "20px" }}>
                    <h1>Beneficios</h1>
                    <h1>Servicio gratuito de Spotify</h1>
                    <div className="logoPlan">
                        <img src={logo} alt="" />
                        <h1>Plan Premium</h1>
                    </div>
                </div>

                {beneficios.map((texto, i) => (
                    <motion.div 
                        key={i} 
                        className="fila"
                        custom={i}
                        variants={filaVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true}}
                        transition={{delay:0.8}}
                        style={i === beneficios.length - 1 ? { border: "none" } : {}}
                    >
                        <p>{texto}</p>
                        <img src={equis} alt="equis" />
                        <img src={tick} alt="tick" />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
