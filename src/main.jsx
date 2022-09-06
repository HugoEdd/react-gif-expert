import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GifExpertApp />
    </React.StrictMode>

    // ? El MODO ESTRICTO DE REACT SOLO SE APLICA EN DESARROLLO, ayuda demasiado con versiones old

    // ? ALGUN CODIGO SE VA EJECUTAR DOS VECES, POR PRECAUCION, PERO ESO NO VA A AFECTAR EN NADA, SOLO PASA EN PRODUC
);  


