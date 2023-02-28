
import { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({children}) => {

  const [url, setUrl] = useState({
    url:"http://127.0.0.1:8010/api/listIngresos",
    data:null,
    method:"GET"
  })

  const [listado, setListado] = useState([])

  return (
    <UserContext.Provider value={{url,setUrl,listado,setListado}} >
        {children}
    </UserContext.Provider>
  )
}
