import React from 'react';
import { notification } from 'antd';
import axios from 'axios'
const Registro = (props) => {

    const registrar = (event) => {
        event.preventDefault();
        if (event.target.password?.value !== event.target.password2?.value) {
            return notification.error({ message: 'Las passwords', description: 'Las contraseñas no coinciden' })
        }
        const usuario = {
            nombre: event.target.nombre.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }
        axios.post('http://localhost:3001/user/registro', usuario)
            .then(res => {
                notification.success({ message: 'Registrado', description: 'Bienvenid@ ' + res.data.nombre })
                setTimeout(() => {
                    props.history.push('/login')
                }, 2000);
            })
            .catch(err => console.error(err))

    }

    return (
        <div className="formulario">
            <form className="registro" onSubmit={registrar}>
                <input type="text" name="nombre" placeholder="nombre"/>
                <input type="email" name="email" placeholder="email" />
                <input type="password" name="password" placeholder="password" />
                <input type="password" name="password2" placeholder="password" />
                <input className="btn" type="submit" value="Registrarse" />
            </form>
        </div>

    )
}
export default Registro;