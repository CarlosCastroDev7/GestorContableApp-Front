import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useForm } from '../hooks/useForm'

export const IngresosForm = () => {
  const { concepto, valor, fecha, onInputChange, onResetForm } = useForm({
    concepto: "",
    valor: '',
    fecha: "",
  })

  const { setUrl, listado, setListado } = useContext(UserContext)

  const onNewIngreso = (event) => {
    event.preventDefault();
    if (concepto === "" || fecha === "" || valor === '') return;
    setListado([...listado, {
      id: new Date().getTime(),
      concepto,
      valor: parseInt(valor),
      fecha,
      encabezado: false
    }])
    onResetForm();
    setUrl({
      url: "http://127.0.0.1:8010/api/insertIngresos",
      data: [{
        concepto,
        valor: parseInt(valor),
        fecha
      }],
      method: "POST",
    })
  }

  return (
    <>
      <form className='form'>
        <div className='form__section'>
         <label htmlFor="fecha">
         <span>Fecha</span>
         <input
            type="date"
            className='form__input'
            name='fecha'
            id='fecha'
            value={fecha}
            onChange={onInputChange}
          />
         </label>

          <label htmlFor="concepto">
            <span>Concepto</span>
            <input
              type="text"
              placeholder="ej. Pago Febrero"
              className='form__input'
              name='concepto'
              id='concepto'
              value={concepto}
              onChange={onInputChange}
            />
          </label>

          <label htmlFor="valor">
            <span>Valor</span>
            <input
              type="number"
              placeholder='ej. 150.000'
              className='form__input'
              name='valor'
              id='valor'
              value={valor}
              onChange={onInputChange}
            />
          </label>

        </div>
        <button
          className='form__submit'
          onClick={onNewIngreso}
        >Agregar</button>
      </form>
    </>
  )
}
