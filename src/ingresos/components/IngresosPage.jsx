import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useFetch } from "../hooks/useFetch";
import { useListadoIngresos } from "../hooks/useListadoIngresos";
import { IngresosForm } from "./IngresosForm";
import { IngresosListado } from "./IngresosListado";

export const IngresosPage = () => {
  const { url, listado } = useContext(UserContext);

  const { data } = useFetch(url.url, url.data, url.method);

  useListadoIngresos(data, url.method);

  return (
    <>
      <section className="content">
        <h1 className="content__title">
          <span className="material-symbols-outlined">face</span> Control de i
          Personal
        </h1>
        <IngresosForm />
        <IngresosListado
          datos={{
            concepto: "Descripcion",
            fecha: "Fecha",
            valor: "Ingresos ($)",
            encabezado: true,
          }}
        />
        {listado.map((datos) => (
          <IngresosListado key={datos.id} datos={datos} />
        ))}
      </section>
    </>
  );
};
