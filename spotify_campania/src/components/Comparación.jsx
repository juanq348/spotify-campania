import '../styles/comparacion.css'
import equis from '../assets/img/cross.png'
import tick from '../assets/img/checked.png'
import logo from '../assets/img/logo.png'

export default function Comparacion() {
    return(
        <div className="comparacion-container">
            <div className="comparacion">
                <div className="encabezado" style={{borderBottom:"3px solid white", paddingBottom:"20px"}}>
                    <h1>Beneficios</h1>
                    <h1>Servicio gratuito de Spotify</h1>
                    <div className="logoPlan">
                        <img src={logo} alt=""/>
                        <h1>Plan Premium</h1>
                    </div>
                </div>

                <div className="fila">
                    <p>Música sin anuncios</p>
                    <img src={equis}/>
                    <img src={tick} alt="" />
                </div>
                <div className="fila">
                    <p>Descargá y escucha contenido en modo offline</p>
                    <img src={equis}/>
                    <img src={tick} alt="" />
                </div>
                <div className="fila">
                    <p>Reproducí canciones en el orden que quieras</p>
                    <img src={equis}/>
                    <img src={tick} alt="" />
                </div>
                <div className="fila">
                    <p>Audio de alta calidad</p>
                    <img src={equis}/>
                    <img src={tick} alt="" />
                </div>
                <div className="fila">
                    <p>Saltos ilimitados</p>
                    <img src={equis}/>
                    <img src={tick} alt="" />
                </div>
                <div className="fila" style={{border:"none"}}>
                    <p>Organizá la fila de reproducción</p>
                    <img src={equis}/>
                    <img src={tick} alt="" />
                </div>
            </div>
        </div>
    )
}