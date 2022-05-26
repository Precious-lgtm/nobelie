import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import '../styles/auth.css';

function Signin(props) {
    return(
        <div className = 'regContainer'>
            <div className = 'regForm'>
                <h4 className = 'formHeader'> 
                    <label> Welcome Back </label> 
                    <Link to = '/'><FiHome color = 'white' fill = 'black' size = {25} /></Link>
                </h4>
                <h5 className = 'formHeader2'> We've missed you here at Nobelie. </h5>
                <form className = 'signin' method = 'POST'>
                    <div className = 'formData'>
                        <input 
                            type = 'text' 
                            name = 'username' 
                            id = 'username' 
                            placeholder = 'Username or Email Address' 
                            required
                        />
                    </div>
                    <div className = 'formData'>
                        <input 
                            type = 'password' 
                            name = 'password' 
                            id = 'password' 
                            placeholder = 'Password' 
                            required
                        />
                    </div>
                    <div className = 'formData'>
                        <input className = 'submit' type = 'submit' value = 'Login' name = 'login' />
                    </div>
                    <div className = 'formData2'>
                        <Link to = '/auth/signup' className = 'alt'> Create a New Account </Link>
                        <Link to = '/auth/reset' className = 'alt'> Forgot Password? Reset It Here.</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin;