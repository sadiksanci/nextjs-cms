import axios from 'axios'
import { useState } from 'react'

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const getToken = async () =>{
        await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
    }
     const handleSubmit = async (event)=>{
       await getToken();
         //event.preventDefault()
        try {
           const response = await axios.post('http://127.0.0.1:8000/api/login',
               { email, password },
               {withCredentials:true},
           )
            console.log(response);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form  >
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
            </div>
            <button type="button" onClick={handleSubmit}>Login</button>
        </form>
    )
}

export default LoginForm
