import { IngresosPage } from './components/IngresosPage'
import { UserProvider } from './context/UserProvider'
import './styles.css'

export const IngresosApp = () => {
  return (
    <UserProvider>
      <IngresosPage/>
    </UserProvider>
  )
}
