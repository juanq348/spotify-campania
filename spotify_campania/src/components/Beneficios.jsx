import '../styles/beneficios.css'
import wifi from '../assets/img/wifi.png'
import infinito from '../assets/img/infinito.png'
import vinilo from '../assets/img/vinilo.png'
import garantia from '../assets/img/garantia.png'
import { delay, motion } from 'framer-motion'

function Beneficios() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay:0.3}}
  }

  return (
    <div className="cartas-container">
      <div className="cartas">
        <motion.div className="carta-uno" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="contenedor-img-uno">
            <video className='fondo-video' autoPlay loop muted playsInline>
              <source src="https://res.cloudinary.com/dpycdilno/video/upload/v1750113670/bucle_bfrhhg.mp4" type='video/mp4'/>
            </video>
          </div>
          <motion.div className="carta-texto" variants={fadeIn}>
            <h2>Música sin anuncios</h2>
            <p>Disfruta de tus canciones favoritas sin interrupciones, sin pausas molestas y sin mensajes promocionales entre canciones. Con Spotify Premium estas libre de publicidad: escuchás lo que querés, cuando querés, sin perder el ritmo.</p>
          </motion.div>
        </motion.div>

        <motion.div className="carta-dos" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="carta-texto-dos" variants={fadeIn}>
            <h2>Descargas sin conexión</h2>
            <p>Accedé a tu música favorita en cualquier momento y lugar, incluso cuando no tengas conexión a internet. Vas a poder descargar canciones, álbumes o playlists enteras en tu dispositivo. Ya no vas a depender de datos móviles o Wi-Fi. Llevá tu música con vos, estés donde estés.</p>
          </motion.div>
          <motion.div className="contenedor-img" variants={fadeIn}>
              <img src={wifi}/>
            </motion.div>
        </motion.div>

        <motion.div className="carta-tres" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="carta-texto-tres" variants={fadeIn}>
            <h2>Saltos ilimitados</h2>
            <p>Escuchá tu música sin restricciones. Vas a poder cambiar de canción todas las veces que quieras, sin esperas ni límites. Pasá directamente a tus temas preferidos, descubrí nueva música sin interrupciones y creá la experiencia perfecta para cada momento. Vos decidís qué suena y cuándo.</p>
          </motion.div>
          <motion.div className="contenedor-img-tres" variants={fadeIn}>
              <img src={infinito}/>
            </motion.div>
        </motion.div>

        <motion.div className="carta-cuatro" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="carta-texto-cuatro" variants={fadeIn}>
            <h2>Calidad de audio mejorada</h2>
            <p>Viví una experiencia sonora superior. Con la calidad de audio optimizada del plan Premium, cada nota, cada instrumento y cada detalle se escucha con más nitidez y profundidad. Disfrutá tus canciones al máximo.</p>
          </motion.div>
            <motion.div className="contenedor-img-cuatro" variants={fadeIn}>
              <img src={vinilo}/>
            </motion.div>
        </motion.div>

        <motion.div className="carta-cinco" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="carta-texto-cinco" variants={fadeIn}>
            <h2>Variedad de planes</h2>
            <p>Elegí el plan que se adapte a tu estilo de vida. Podés optar por una cuenta individual o compartir la experiencia con tu pareja, amigos o toda tu familia. Pagá menos por más, accedé a múltiples perfiles y disfrutá juntos sin perder la personalización.</p>
          </motion.div>
          <motion.div className="contenedor-img-cinco" variants={fadeIn}>
              <img src={garantia}/>
            </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Beneficios
