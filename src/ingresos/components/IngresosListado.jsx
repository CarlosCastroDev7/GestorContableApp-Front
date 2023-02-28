
export const IngresosListado = ({datos}) => {
  return (
    <>
        <div className="listados">
            <p className={`listados__p ${datos.encabezado ? 'encabezados' : 'date'}`}>{datos.fecha}</p>
            <p className={`listados__p ${datos.encabezado ? 'encabezados_concepto' : 'concepto'}`}>{datos.concepto}</p>
            <p className={`listados__p ${datos.encabezado ? 'encabezados' : 'valor'}`}>{datos.valor}</p>
        </div>
    </>
  )
}