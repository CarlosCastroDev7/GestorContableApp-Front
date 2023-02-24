
import { useState } from 'react'
import { IngresosForm } from './components/IngresosForm'
import { IngresosListado } from './components/IngresosListado'
import './styles.css'

export const Ingresos = () => {

  const [listado, setListado] = useState([])

  return (
    <>
        <h1 className='h1_Ingresos'>Control de i Personal</h1>

        <IngresosForm setListado={setListado} listado={listado}/>

        <IngresosListado datos={{
          id: 1,
          concepto:"Descripcion",
          fecha:"Fecha",
          valor:"Ingresos ($)",
          encabezado:true
        }} />
        {
          listado.map(
            datos => 
              <IngresosListado key={datos.id} datos={datos} />
          )
        }

    </>
  )
}
