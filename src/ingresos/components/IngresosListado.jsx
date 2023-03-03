export const IngresosListado = ({ datos }) => {
  return (
    <section className="section">
      <table className="table">
        <tr>
          <th>{datos.encabezado ? "encabezados" : "date"}</th>
          <th>{datos.encabezado ? "encabezados_concepto" : "concepto"}</th>
          <th>{datos.encabezado ? "encabezados" : "valor"}</th>
        </tr>
        <tr>
          <td> {datos.fecha}</td>
          <td> {datos.concepto}</td>
          <td> {datos.valor}</td>
        </tr>
      </table>
      {/* <div className="listados">
        <p
          className={`listados__p ${datos.encabezado ? "encabezados" : "date"}`}
        >
          {datos.fecha}
        </p>
        <p
          className={`listados__p ${
            datos.encabezado ? "encabezados_concepto" : "concepto"
          }`}
        >
          {datos.concepto}
        </p>
        <p
          className={`listados__p ${
            datos.encabezado ? "encabezados" : "valor"
          }`}
        >
          {datos.valor}
        </p>
      </div> */}
    </section>
  );
};
