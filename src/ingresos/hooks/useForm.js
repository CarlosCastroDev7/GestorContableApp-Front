import { useState } from "react"

export const useForm = ( initialInputs = {} ) => {

    const [input, setInput] = useState(initialInputs)

    const onInputChange =({target}) =>{
    setInput({
        ...input,
        [target.name] : target.value
    })
    }
    const onResetForm = () =>{
      setInput(initialInputs)
    }
    return ({
        ... input,
        onInputChange,
        onResetForm

    })
}
