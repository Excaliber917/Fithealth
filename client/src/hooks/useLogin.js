import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
export const useLogin = ()=>{
    const [loading, setLoading] = useState(false)
    const {setUser} = useAuthContext()
    const navigate = useNavigate()

    const login = async ({username,password})=>{
        const success = verifyInputs({  username, password})
        if (!success)
            return

        try{
            setLoading(true)
            // console.log(loading)
            const res = await axios.post('/api/auth/login',{
                username,
                password
            })
            toast.success("Log In successfull")
            localStorage.setItem("Healthuser",JSON.stringify(res.data))
            setUser(res.data)
            navigate("/")
      
        }catch(error)
        {
            toast.error(error.response.data.error)
        }finally{
            setLoading(false)
            // console.log(loading)
        }
    }

    return {loading , login} 

}

const verifyInputs = ({username,password})=>{
    if(!username || !password)
    {
        toast.error("fields are empty")
        return false
    }
    if(password.length <  4)
    {
        toast.error("password have to be atleast 4 or more characters")
        return false
    }

    return true
}