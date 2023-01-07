import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error1,setError1] = useState(null)
    const [isLoading1,setIsLoading1] = useState(null)
    const {dispatch} = useAuthContext()

    const login = async (email,password) => {
        setIsLoading1(true)
        setError1(null)

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        })
        const json = await response.json()
        console.log(JSON.stringify(json))

        if (!response.ok) {
            setIsLoading1(false)
            setError1(json.error)
        }
        if (response.ok) {
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading1(false)
        }
    }
    return {login,isLoading1,error1}
}