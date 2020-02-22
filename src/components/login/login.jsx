import React from 'react';
import { notification } from 'antd';
import axios from 'axios'
const login = (props) => {

    const conectar = (event) => {
        event.preventDefault();
        const usuario = {
            nombre: event.target.nombre.value,
            password: event.target.password.value,
        }
        
        axios.post('http://localhost:3001/user/login', usuario)
            .then(res => {
                notification.success({ message: 'Conectad@ con éxito', description: 'Hola ' + res.data.nombre })
                setTimeout(() => {
                    props.history.push('/inicio')
                }, 2000);
            })      
            .catch(err =>{
                notification.error({ message: 'Conexión fallida', description: 'Nombre o contraseña incorrectos'})
                setTimeout(() => {
                    props.history.push('/login');
                    console.error(err)})
                }, 2000);
    }

    return (
        <div className="formulario">
            <form className="login" onSubmit={conectar}>
            <input type="text" name="nombre" placeholder="nombre" />
            <input type="password" name="password" placeholder="password" />
            <input className="btn" type="submit" value="Conectarse" />
        </form>
        </div>
    )
}
export default login;