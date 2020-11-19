import React, { Component } from 'react';

class Buscador extends Component {

    busquedaref = React.createRef();
    handleData = (e) =>{
        e.preventDefault();
        const termino = this.busquedaref.current.value;
        this.props.datosBusqueda(termino)
    }
    render() {
        return (
            <form onSubmit={this.handleData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaref} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen. Ejemplo: Futbol" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;