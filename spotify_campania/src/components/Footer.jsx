import logo from "../assets/img/logo.png"
import instagram from "../assets/img/instagram.png"
import twitter from "../assets/img/twitter.png"
import facebook from "../assets/img/facebook.png"
import { motion } from "framer-motion"
import '../styles/footer.css'

export default function Footer() {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo}/>
                    <h2>Spotify</h2>
                </div>

                <div className="footer-links">
                    <div>
                        <h3>COMPAÑÍA</h3>
                        <ul>
                            <a href="https://www.spotify.com/ar/about-us/contact/" target="_blank"><li>Acerca de</li></a>
                            <a href="https://www.lifeatspotify.com/#_gl=1*1v4tmtw*_gcl_au*NzQ5MTg3OTQwLjE3NDI0MTM2NTc." target="_blank"><li>Empleo</li></a>
                            <a href="https://newsroom.spotify.com/#_gl=1*1v4tmtw*_gcl_au*NzQ5MTg3OTQwLjE3NDI0MTM2NTc." target="_blank"><li>For the Record</li></a>
                        </ul>
                    </div>
                    <div>
                        <h3>COMUNIDADES</h3>
                        <ul>
                            <a href="https://artists.spotify.com/home#_gl=1*yjgh12*_gcl_au*NzQ5MTg3OTQwLjE3NDI0MTM2NTc." target="_blank"><li>Para artistas</li></a>
                            <a href="https://developer.spotify.com/#_gl=1*yjgh12*_gcl_au*NzQ5MTg3OTQwLjE3NDI0MTM2NTc." target="_blank"><li>Desarrolladores</li></a>
                            <a href="https://ads.spotify.com/en-US/#_gl=1*1pe7te4*_gcl_au*NzQ5MTg3OTQwLjE3NDI0MTM2NTc." target="_blank"><li>Publicidad</li></a>
                            <a href="https://investors.spotify.com/home/default.aspx#_gl=1*1pe7te4*_gcl_au*NzQ5MTg3OTQwLjE3NDI0MTM2NTc." target="_blank"><li>Inversionistas</li></a>
                            <a href="https://investors.spotify.com/home/default.aspx#_gl=1*1pe7te4*_gcl_au*NzQ5MTg3OTQwLjE3NDI0MTM2NTc." target="_blank"><li>Proveedores</li></a>
                        </ul>
                    </div>
                    <div>
                        <h3>ENLACES ÚTILES</h3>
                        <ul>
                            <a href="https://support.spotify.com/ar/#_gl=1*1pe7te4*_gcl_au*NzQ5MTg3OTQwLjE3NDI0MTM2NTc." target="_blank"><li>Ayuda</li></a>
                            <a href="https://open.spotify.com/intl-es/#_gl=1*1pe7te4*_gcl_au*NzQ5MTg3OTQwLjE3NDI0MTM2NTc." target="_blank"><li>Reproductor Web</li></a>
                            <a href="https://www.spotify.com/ar/free/" target="_blank"><li>App móvil gratis</li></a>
                        </ul>
                    </div>
                    
                    <div className="footer-social">
                        <a href="https://www.instagram.com/spotify/" target="_blank">
                            <i className="fab fa-instagram">
                                <motion.img src={instagram} className="red-social-foto" whileHover={{scale:1.15}}/>
                            </i>
                        </a>

                        <a href="https://x.com/spotify" target="_blank">
                            <i className="fab fa-twitter">
                                <motion.img src={twitter} className="red-social-foto" whileHover={{scale:1.15}}/>
                            </i>
                        </a>

                        <a href="https://www.facebook.com/Spotify" target="_blank">
                            <i className="fab fa-facebook">
                                <motion.img src={facebook} className="red-social-foto" whileHover={{scale:1.15}}/>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Proyecto Big Data</p>
            </div>
        </div>
    )
}