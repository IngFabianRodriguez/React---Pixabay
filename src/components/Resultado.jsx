import React, { Component } from 'react';
import Imagen from './Imagenes'
import Paginacion from './Paginacion'


class Resultado extends Component {
    MostrarResultado = () => {
        const imagenes = this.props.imagenes
        if (imagenes.length === 0) return null;
        return (
            <React.Fragment>
                <Paginacion
                paginaAnterior={this.props.paginaAnterior}
                paginaSiguiente={this.props.paginaSiguiente}
                />
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen => (
                        <Imagen
                            key={imagen.id}
                            imagen={imagen}
                        />
                    ))}
                </div>
                <Paginacion
                paginaAnterior={this.props.paginaAnterior}
                paginaSiguiente={this.props.paginaSiguiente}
                />
            </React.Fragment>
        )
    }
    render() {
        return (
            <React.Fragment>
                {this.MostrarResultado()}
            </React.Fragment>
        );
    }
}

export default Resultado;