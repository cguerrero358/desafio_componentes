import React from 'react'
import SocialButton from './SocialButton'
import Formulario from './Formulario'
import Alert from './Alert'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function Registro(props) {
  return (
    <>
      
      <div className="redeSociales">
      <SocialButton 
          icon1={faFacebook}
          icon2={faGithub}
          icon3={faLinkedinIn}
        />
      </div>
      
      <p>o usa tu mail para registrarte</p>
      <Formulario validarDatos={props.validarDatos}
        nombre={props.nombre}
        setNombre={props.setNombre}
        email={props.email}
        setEmail={props.setEmail}
        contraseña={props.contraseña}
        setContraseña={props.setContraseña}
        confirmacion={props.confirmacion}
        setConfirmacion={props.setConfirmacion}
      />
      {props.errorllenado ? <Alert errormsg={props.errorllenadomsg} status="alert alert-danger" /> : null}
      {props.errorigualdadpass ? <Alert errormsg={props.errorigualdadpassmsg} status="alert alert-danger" /> : null}
      {props.errorpass ? <Alert errormsg={props.errorpassmsg} status="alert alert-danger" /> : null}
      {props.erroremail ? <Alert errormsg={props.erroremailmsg} status="alert alert-danger" /> : null}
      {props.noerror ? <Alert errormsg={props.noerrormsg} status="alert alert-success" /> : null}
    </>
  )
}

export default Registro