import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro';
import { useState } from 'react'

function App() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [confirmacion, setConfirmacion] = useState("")
  const [errorllenado, setErrorllenado] = useState(false)
  const [errorigualdadpass, setErrorigualdadpass] = useState(false)
  const [errorpass, setErrorpass] = useState(false)
  const [erroremail, setErroremail] = useState(false)
  const [errorllenadomsg, setErrorllenadomsg] = useState(false)
  const [errorigualdadpassmsg, setIgualdadpassmsg] = useState(false)
  const [errorpassmsg, setErrorpassmsg] = useState(false)
  const [erroremailmsg, setErroremailmsg] = useState(false)
  const [noerror, setNoerror] = useState(false)
  const [noerrormsg, setNoerrormsg] = useState("")


  function esPasswordSeguro(password) {
    const longitudValida = password.length >= 8;
    const contieneMayuscula = /[A-Z]/.test(password);
    const contieneMinuscula = /[a-z]/.test(password);
    const contieneNumero = /\d/.test(password);
    const contieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return longitudValida && contieneMayuscula && contieneMinuscula && contieneNumero && contieneEspecial;
  }

  const validarLlenadoCampos = (e) => {
    e.preventDefault()
    if (nombre == '' || email == '' || contraseña == '' || confirmacion == '') {
      setErrorllenado(true)
      setNoerror(false)
      setErrorllenadomsg("Completar todos los campos!")
      return
    } else {
      setErrorllenado(false)
      validarPass(e)
    }
  }

  const validarIgualdadPass = (e) => {
    e.preventDefault()
    if (contraseña !== confirmacion) {
      setErrorigualdadpass(true)
      setErrorpass(false)
      setNoerror(false)
      setIgualdadpassmsg("Las contraseña deben coincidir")
      return
    } else {
      setErrorllenado(false)
      setErroremail(false)
      setErrorpass(false)
      setErrorigualdadpass(false)
      setNoerror(true)
      setNoerrormsg("Se ha registrado exitosamente su cuenta!")
      setNombre("")
      setEmail("")
      setContraseña("")
      setConfirmacion("")
    }
  }

  const validarPass = (e) => {
    e.preventDefault()
    if (esPasswordSeguro(contraseña)) {
      validarIgualdadPass(e)
    } else {
      setErrorpass(true)
      setNoerror(false)
      setErrorpassmsg("La contraseña debe tener al menos 8 caracteres, contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial")
      return
    }
  }

  const validarEmail = (e) => {
    e.preventDefault()
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      setErroremail(true)
      setNoerror(false)
      setErroremailmsg("El email debe ser valido!")
      return
    }
    setErroremail(false)
  }

  const validarDatos = (e) => {
    e.preventDefault()
    //Validación
    validarLlenadoCampos(e)
    validarEmail(e)

  }
  return (
    <>
      <div className='contenedorForm'>
        <h1>Crea una cuenta</h1>
        <Registro errorllenado={errorllenado}
          errorllenadomsg={errorllenadomsg}
          validarDatos={validarDatos}
          nombre={nombre}
          setNombre={setNombre}
          email={email}
          setEmail={setEmail}
          contraseña={contraseña}
          setContraseña={setContraseña}
          confirmacion={confirmacion}
          setConfirmacion={setConfirmacion}
          erroremail={erroremail}
          erroremailmsg={erroremailmsg}
          errorigualdadpass={errorigualdadpass}
          errorigualdadpassmsg={errorigualdadpassmsg}
          errorpass={errorpass}
          errorpassmsg={errorpassmsg}
          noerror={noerror}
          noerrormsg={noerrormsg}
        />
        <br />
      </div>
    </>
  )
}

export default App