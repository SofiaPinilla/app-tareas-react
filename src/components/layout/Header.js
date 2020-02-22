import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <header style ={headerStyle}>
            <h1 style={linkStyle}>Lista de Tareas</h1>
            <Link  style={linkStyle} to="/">Inicio</Link> | <Link 
            style={linkStyle} to="/login">Conectarme</Link> | <Link 
            style={linkStyle} to="/registro">Registrarme</Link>
        </header>
    )
}

const headerStyle ={
    background: 'rgb(0, 218, 247)',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',

}

const linkStyle ={
    color: '#fff',
    textDecoration: 'none'
}
export default Header;