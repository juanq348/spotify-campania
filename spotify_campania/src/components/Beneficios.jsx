import '../styles/beneficios.css'
import wifi from '../assets/img/wifi.png'
import infinito from '../assets/img/infinito.png'
import vinilo from '../assets/img/vinilo.png'
import garantia from '../assets/img/garantia.png'

function Beneficios() {
  return (
    <div className="cartas-container">
      <div className="cartas">
        <div className="carta-uno">
          <div className="contenedor-img-uno">
            <video className='fondo-video' autoPlay loop muted playsInline>
              <source src="https://res.cloudinary.com/dpycdilno/video/upload/v1750113670/bucle_bfrhhg.mp4" type='video/mp4'/>
            </video>
          </div>
          <div className="carta-texto">
            <h2>Música sin anuncios</h2>
            <p>Disfruta de tus canciones favoritas sin interrupciones, sin pausas molestas y sin mensajes promocionales entre canciones. Con Spotify Premium estas libre de publicidad: escuchás lo que querés, cuando querés, sin perder el ritmo.</p>
          </div>
        </div>
        <div className="carta-dos">
          <div className="carta-texto-dos">
            <h2>Descargas sin conexión</h2>
            <p>Accedé a tu música favorita en cualquier momento y lugar, incluso cuando no tengas conexión a internet. Vas a poder descargar canciones, álbumes o playlists enteras en tu dispositivo. Ya no vas a depender de datos móviles o Wi-Fi. Llevá tu música con vos, estés donde estés.</p>
          </div>
          <div className="contenedor-img">
              <img src={wifi}/>
            </div>
        </div>
        <div className="carta-tres">
          <div className="carta-texto-tres">
            <h2>Saltos ilimitados</h2>
            <p>Escuchá tu música sin restricciones. Vas a poder cambiar de canción todas las veces que quieras, sin esperas ni límites. Pasá directamente a tus temas preferidos, descubrí nueva música sin interrupciones y creá la experiencia perfecta para cada momento. Vos decidís qué suena y cuándo.</p>
          </div>
          <div className="contenedor-img-tres">
              <img src={infinito}/>
            </div>
        </div>
        <div className="carta-cuatro">
          <div className="carta-texto-cuatro">
            <h2>Calidad de audio mejorada</h2>
            <p>Viví una experiencia sonora superior. Con la calidad de audio optimizada del plan Premium, cada nota, cada instrumento y cada detalle se escucha con más nitidez y profundidad. Disfrutá tus canciones al máximo.</p>
          </div>
            <div className="contenedor-img-cuatro">
              <img src={vinilo}/>
            </div>
        </div>
        <div className="carta-cinco">
          <div className="carta-texto-cinco">
            <h2>Variedad de planes</h2>
            <p>Elegí el plan que se adapte a tu estilo de vida. Podés optar por una cuenta individual o compartir la experiencia con tu pareja, amigos o toda tu familia. Pagá menos por más, accedé a múltiples perfiles y disfrutá juntos sin perder la personalización.</p>
          </div>
          <div className="contenedor-img-cinco">
              <img src={garantia}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Beneficios
