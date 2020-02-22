import React from 'react';
import checklist from './checklist.jpg';

export default function Inicio() {
    return (
        <React.Fragment>
                <img className="imagen" src={checklist} />
                <p className="parrafo">Bienvenid@s a mi primera aplicación de tareas hecha con React
                </p>
        </React.Fragment>
    )
}
