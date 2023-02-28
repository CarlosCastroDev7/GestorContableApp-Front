import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext"

export const useListadoIngresos = (data, method) => {
    const {listado,setListado} = useContext(UserContext)

    const nuevosDatos = () => {
        const array  = data.map(a => ( {
            id:Math.random(),
            valor:a.valor,
            fecha:a.fecha,
            concepto:a.concepto,
            encabezado:false
        }))
        setListado([
            ...listado,
            ...array
        ])
    }

    useEffect(() => {
    if (method === "GET"){
        nuevosDatos()
    }   
    }, [data])

}
