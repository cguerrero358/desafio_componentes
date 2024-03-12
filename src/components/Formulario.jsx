import React from 'react'

function Formulario(props) {

    return (
        <>
            <form className="formulario" onSubmit={props.validarDatos}>
                <div className="form-group">
                    <input
                        type="text" value={props.nombre} placeholder='Nombre' name="nombre" className="form-control" onChange={(e) => props.setNombre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text" value={props.email} placeholder='tuemail@ejemplo.com' name="email" className="form-control" onChange={(e) => props.setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text" value={props.contraseña} placeholder='Contraseña' name="contraseña" className="form-control" onChange={(e) => props.setContraseña(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text" value={props.confirmacion} placeholder='Confirma tu contraseña' name="confirmacion" className="form-control" onChange={(e) => props.setConfirmacion(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" >Registrarse</button>
            </form>
            <p>
                {props.nombre} - {props.email} - {props.contraseña} - {props.confirmacion}
            </p>
        </>
    )
}

export default Formulario