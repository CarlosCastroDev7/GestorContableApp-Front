import { useForm } from '../hooks/useForm'

export const IngresosForm = ({setListado,listado}) => {
  const {concepto,valor,fecha,onInputChange,onResetForm}= useForm({
      concepto:"",
      valor:'',
      fecha:"",
  })
    
  const onNewIngreso = (event) =>  {
    event.preventDefault();
    if (concepto === "" || fecha === "" || valor === '') return;
    setListado([...listado,{
      id: new Date().getTime(),
      concepto,
      valor,
      fecha,
      encabezado:false
    }])
    onResetForm();
  }

  return (
    <>
        <form className='form__ingresos'>
          <div className='form__div__inputs'>
            <input 
              type="date" 
              className='input__date'
              name='fecha'
              value={fecha}
              onChange={onInputChange}
              />
            <input 
              type="text" 
              placeholder="Concepto" 
              className='input__concepto'
              name='concepto'
              value={concepto}
              onChange={onInputChange}
              />
            <input 
              type="number" 
              placeholder='Valor' 
              className='input__valor'
              name='valor'
              value={valor}
              onChange={onInputChange}
              />
          </div>
          <button 
            className='button__agregar' 
            onClick={onNewIngreso}
          >Agregar</button>
        </form>
    </>
  )
}
