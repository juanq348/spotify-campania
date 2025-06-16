import "../styles/planes.css"
import logo from "../assets/img/logo.png"

export default function Planes() {
    return(
        <div id="planes">
        <h1 className="titulo-planes">Conocé nuestros planes</h1>
        <div className="planes-container">
            <div className="plan-individual">
                <div className="encabezado-planes">
                    <img src={logo}/>
                    <h2>Premium</h2>
                </div>
                <div className="titulo-sub">
                    <h1>Individual</h1>
                    <p>$0 por 1 mes</p>
                    <p className="letra-chica">Despúes, cuesta $2.499*** al mes</p> 
                </div>
                <ul className="opcion">
                    <li>1 cuenta Premium</li>
                    <li>Cancelá cuando quieras</li>
                    <li>Pago por suscripción o pago único</li>
                </ul>
                <div className="botones">
                    <button className="boton-prueba">Probar 1 mes por $0</button>
                    <button className="boton-unico">Pago único</button>
                </div>
                <div className="pie-carta">
                    <p className="letra-chica">$0 por 1 mes.Después, cuesta $2.499*** al mes. La oferta solo esta disponible si aún no probaste Premium. Se aplican Términos.</p>
                    <p className="letra-chica">***+impuestos aplicables.</p>
                </div>
            </div>

            <div className="plan-duo">
                <div className="encabezado-planes">
                    <img src={logo}/>
                    <h2>Premium</h2>
                </div>
                <div className="titulo-sub-duo">
                    <h1>Duo</h1>
                    <p>$3.299*** al mes</p>
                </div>
                <ul className="opcion">
                    <li>2 cuentas Premium</li>
                    <li>Cancelá cuando quieras</li>
                    <li>Pago por suscripción o pago único</li>
                </ul>
                <div className="botones">
                    <button className="boton-prueba-duo">Obtener Premium Duo</button>
                    <button className="boton-unico">Pago único</button>
                </div>
                <div className="pie-carta">
                    <p className="letra-chica" style={{marginTop:"15px"}}>Para parejas que viven en el mismo domicilio. Se aplican Términos.</p>
                    <p className="letra-chica">***+impuestos aplicables.</p>
                </div>
            </div>

            <div className="plan-estudiante">
                <div className="encabezado-planes">
                    <img src={logo}/>
                    <h2>Premium</h2>
                </div>
                <div className="titulo-sub-estudiante">
                    <h1>Estudiantes</h1>
                    <p>$0 por 1 mes</p>
                    <p className="letra-chica">Despúes, cuesta $1.299*** al mes</p> 
                </div>
                <ul className="opcion">
                    <li>1 cuenta Premium verificada</li>
                    <li>Descuento para estudiantes que cumplen con los requisitos</li>
                    <li>Cancelá cuando quieras</li>
                </ul>
                <div className="botones">
                    <button className="boton-prueba-estudiante">Probar 1 mes por $0</button>
                </div>
                <div className="pie-carta">
                    <p className="letra-chica">$0 por 1 mes.Después, cuesta $1.299*** al mes. La oferta está disponible solo para estudiantes de instituciones de educación superior acreditadas que aún no hayan probado Premium. Se aplican Términos.</p>
                    <p className="letra-chica">***+impuestos aplicables.</p>
                </div>
            </div>

            <div className="plan-familiar">
                <div className="encabezado-planes">
                    <img src={logo}/>
                    <h2>Premium</h2>
                </div>
                <div className="titulo-sub-familiar">
                    <h1>Familiar</h1>
                    <p>$4.199*** al mes</p>
                </div>
                <ul className="opcion">
                    <li>Hasta 6 cuentas Premium o Kids</li>
                    <li>Controlá el contenido marcado como explícito</li>
                    <li>Acceso a Spotify Kids</li>
                    <li>Cancelá cuando quieras</li>
                    <li>Pago por suscripción o pago único</li>
                </ul>
                <div className="botones">
                    <button className="boton-prueba-familiar">Obtener Premium Familiar</button>
                    <button className="boton-unico">Pago único</button>
                </div>
                <div className="pie-carta">
                    <p className="letra-chica">Para hasta 6 familiares que viven en el mismo domicilio. Se aplican Términos.</p>
                    <p className="letra-chica">***+impuestos aplicables.</p>
                </div>
            </div>
        </div>
        </div>
    )
}