
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'

import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
function useSignup() {
    const [loading, setLoading] = useState(false)
    const {setUser} = useAuthContext()
    const navigate = useNavigate()
    const signup = async ({ name, username, password, email, gender }) => {

        const success = verifyInputs({ name, username, password, email, gender })
        if (!success)
            return
        try{
            setLoading(true)
            const res = await axios.post('/api/auth/signup',{
                name,
                username,
                password,
                email,
                gender
            })
            toast.success("successfully signed up")
            localStorage.setItem("Healthuser",JSON.stringify(res.data))
            setUser(res.data)
            navigate("/")
      



        }catch(error)
        {
            toast.error(error.response.data.error)
        }finally{
            setLoading(false)
        }
    }

    return {loading,signup}


}

export default useSignup

function verifyInputs({ name, username, password, email, gender }) {

    if (!name || !username, !password, !email, !gender) {
        toast.error("all fields are required")
        return false
    }
    return true

}