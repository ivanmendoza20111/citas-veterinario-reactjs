import React, { Component } from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

class ListaCitas extends Component {
    render() {

        const citas = this.props.citas;
        const mensajes = Object.keys(citas).length === 0 ? "No hay Citas" : "Administra tus citas aquí";

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensajes}</h2>
                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(cita => (
                          <Cita idCita={cita} key={cita} info={this.props.citas[cita]} borrarCita={this.props.borrarCita} />  
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

ListaCitas.propTypes = {
    citas: PropTypes.object.isRequired,
    borrarCita: PropTypes.func.isRequired
}

export default ListaCitas;