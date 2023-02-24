import { Route, Routes } from "react-router-dom"
import { Gastos } from "./gastos/Gastos"
import { Ingresos } from "./ingresos/Ingresos"
import { NavBar } from "./utils/NavBar"

export const IngresosGastos = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Ingresos />} />
        {/* <Route path="/demas" element={<Gastos />} /> */}
      </Routes>
    </>
    
  )
}
