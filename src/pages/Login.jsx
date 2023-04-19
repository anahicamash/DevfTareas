import { useState, useEffect } from "react"
import {FaSignInAlt} from 'react-icons/fa'
const Login = () => {

    const [formData, setFormData] = useState({
        email:'',
        password:'',

    })
    //destructuring
    const { email, password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <>
            <section className="heading">
                <h4>
                    <FaSignInAlt/> Login
                </h4>
                <p>Please complete your credentials</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email" 
                        name="email" 
                        id="email" 
                        value={email} 
                        placeholder="Type your email" 
                        onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" 
                        name="password" 
                        id="password" 
                        value={password} 
                        placeholder="Type your password" 
                        onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block"> Login</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login