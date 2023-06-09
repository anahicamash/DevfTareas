import { useState, useEffect } from "react"
import {FaUser} from 'react-icons/fa'
const Register = () => {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''

    })
    //destructuring
    const {name, email, password, password2} = formData

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
                    <FaUser/> Register
                </h4>
                <p>Please create an account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" 
                        name="name" 
                        id="name" 
                        value={name} 
                        placeholder="Type your name" 
                        onChange={onChange} />
                    </div>
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
                        <input type="password" 
                        name="password2" 
                        id="password2" 
                        value={password2} 
                        placeholder="Confirm your password" 
                        onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block"> Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register