import { useEffect, useState } from "react"

export const useFetch = (url,valores,methods) => {
    const [state, setState] = useState({
        data:[],
        isLoading:true,
        hasError:""
    })
    const getData = async () =>{
        setState({
        ...state,
        isLoading:true,
        hasError:"",
        })
    
        var resp 

        if (methods === "POST"){
            const requestOptions ={
                method: methods,
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify(valores)
            }
            resp = await fetch(url,requestOptions)
        } else {  
            resp = await fetch(url)
        }
        
        if (resp.ok) {
        const data = await resp.json()
        console.log(data)
        setState({
            data:data,
            isLoading:false,
            hasError:"",
        })
        }else {
        setState({
            ...state,
            isLoading:false,
            hasError:`HTTP error! status: ${resp.status}`,
        })
        }
        
    } 
    useEffect(() => {
        getData()
        
    }, [url])
    
    return {
        ...state
    }

}
