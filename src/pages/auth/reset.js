import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import '../styles/auth.css';

function Reset(props) {
    return(
        <div className = 'regContainer'>
            <div className = 'regForm'>
                <h4 className = 'formHeader'> 
                    <label> Forgot Your Password? </label> 
                    <Link to = '/'><FiHome color = 'white' fill = 'black' size = {25} /></Link>
                </h4>
                <h5 className = 'formHeader2'> Give us your Username / Email. We'll reset it. </h5>
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
                        <input className = 'submit' type = 'submit' value = 'Reset My Password' name = 'login' />
                    </div>
                    <div className = 'formData2'>
                        <Link to = '/auth/signup' className = 'alt'> Create a New Account </Link>
                        <Link to = '/auth' className = 'alt'> Login to an Existing Account </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Reset;