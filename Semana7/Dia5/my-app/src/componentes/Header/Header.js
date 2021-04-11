import React from 'react'

const Header = () => {
    return (
        <nav className= "cabecera">
            <h1>El blog de CodiGo</h1>
            <div className= "links">
                <a href= "/">Inicio</a>
                <a href= "/crear">Nuevo entrada</a>
            </div>
        </nav>
    );
};

export default Header;

