import '../styles/inicio.css'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import logo from '../assets/img/logo2.svg'
import gorillaz from '../assets/img/gorillaz2.png'
import beatles from '../assets/img/beatles.png'
import mitski from '../assets/img/mitski.png'
import badBunny from '../assets/img/bad-bunny.png'
import dillom from '../assets/img/dillom.png'
import clairo from '../assets/img/clairo.png'
import lanaDelRey from '../assets/img/lana-del-rey.png'
import bowie from '../assets/img/bowie.png'
import thomYorke from '../assets/img/thom-yorke.png'

const artistas = [
    { imagen: gorillaz, color: '#be7ed2', nombre: 'Gorillaz', tipo:'Banda'},
    { imagen: beatles, color: '#61abec', nombre: 'The Beatles', tipo:'Banda'},
    { imagen: mitski, color: '#ffb346', nombre: 'Mitski', tipo:'Artista'},
    { imagen: badBunny, color: '#bb300d', nombre: 'Bad Bunny', tipo:'Artista'},
    { imagen: dillom, color: '#f9f871', nombre: 'Dillom', tipo:'Artista'},
    { imagen: clairo, color: '#89acdb', nombre: 'Clairo', tipo:'Artista'},
    { imagen: lanaDelRey, color: '#a92b2a', nombre: 'Lana Del Rey', tipo:'Artista'},
    { imagen: bowie, color: '#dc5874', nombre: 'David Bowie', tipo:'Artista'},
    { imagen: thomYorke, color: '#1b29a6', nombre: 'Radiohead', tipo:'Banda'}
]

function Inicio() {
    const [index, setIndex] = useState(0)
    const artista = artistas[index]

    useEffect(() =>{
        const intervalo = setInterval(() =>{
            setIndex((prev) => (prev + 1) % artistas.length)
        }, 5000)

        return () => clearInterval(intervalo)
    }, [])

    return (
        <div className='inicio'>
            <div className='textoInicio'>
                <div className="logo">
                    <motion.img src={logo} className='logoSpotify' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}/>
                    <motion.h1 className='textoLogo' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>Spotify</motion.h1>
                </div>
                <motion.h1 className='textoSide' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>Disfrutá tus canciones favoritas sin interrupciones.</motion.h1>
                <motion.button className='empiezaYa' key={artista.color} animate={{backgroundColor: artista.color}} transition={{duration:0.5}}>¡EMPIEZA TU PRUEBA GRATUITA YA!</motion.button>
            </div>
            <div className="artista">
                <AnimatePresence mode = "wait">
                <motion.img key={artista.imagen} src={artista.imagen} className='fotoArtista' initial={{opacity:0, x: 0}} animate={{opacity: 1, x: 0}} exit={{opacity:0}} transition={{duration: 0.5}}/>
                </AnimatePresence>
            </div>

        <AnimatePresence mode='wait'>
            <motion.div key={artista.nombre} className="nombre-artista" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.6}} layout>
                <p><b>{artista.tipo}:</b> {artista.nombre}</p>
            </motion.div>
        </AnimatePresence>
        </div>
    )
}

export default Inicio
