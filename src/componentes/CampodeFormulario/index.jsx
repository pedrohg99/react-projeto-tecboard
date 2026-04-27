import './campo-de-formulario.estilos.css'

export function CampodeFormulario ({ children }) {
  return (
    <fieldset className='campo-form'>
      {children}
    </fieldset>
  )
}