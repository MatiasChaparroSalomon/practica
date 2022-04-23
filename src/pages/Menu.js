import Title from '../components/title';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import ShoppingCart from '../components/ShoppingCart'

const cookies = new Cookies();



class Menu extends Component {

    cerrarSesion=()=>{
        cookies.remove('id', {path:"/"});
        cookies.remove('apellido_paterno', {path:"/"});
        cookies.remove('apellido_materno', {path:"/"});
        cookies.remove('nombre', {path:"/"});
        cookies.remove('username', {path:"/"});
        window.location.href='./'
    }

    componentDidMount(){
        if(!cookies.get('username')){
            window.location.href="./"
        }
    }

    render() {
        console.log('id' + cookies.get('id'));
        console.log('apellido_paterno' + cookies.get('apellido_paterno'));
        console.log('apellido_materno' + cookies.get('apellido_materno'));
        console.log('nombre' + cookies.get('nombre'));
        console.log('username' + cookies.get('username'));
        return (
            <div>
                <Title>
                    ¡¡¡Menu Principal mas pijudo!!!
                    hola chiche
                </Title>
                <ShoppingCart/>
                <br />
                <button onClick={()=>this.cerrarSesion}>Cerrar Sesion</button>
            </div>
        );
    }
}

export default Menu;
