import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import '../styles/auth.css';

function Signup(props) {
    return(
        <div className = 'regContainer'>
            <div className = 'regForm'>
                <h4 className = 'formHeader'>
                    <label> Sign Up </label> 
                    <Link to = '/'><FiHome color = 'white' fill = 'black' size = {25} /></Link>
                </h4>
                <h5 className = 'formHeader2'> Become a creator at Nobelie </h5>
                <form className = 'signin' method = 'POST' action = '' autocomplete = 'off'>
                    <div className = 'formData'>
                        <input 
                            type = 'text' 
                            name = 'firstname' 
                            id = 'firstname' 
                            autocomplete = 'off'
                            placeholder = 'Full Name' 
                            required
                        />
                    </div>
                    <div className = 'formData'>
                        <input 
                            type = 'email' 
                            name = 'email' 
                            id = 'email' 
                            autocomplete = 'off'
                            placeholder = 'Email Address' 
                            required
                        />
                    </div>
                    <div className = 'formData'>
                        <input 
                            type = 'text' 
                            name = 'username' 
                            id = 'username' 
                            autocomplete = 'off'
                            placeholder = 'Username (minimum: 4 characters)' 
                            required
                        />
                    </div>
                    <div className = 'formData'>
                        <input 
                            type = 'password' 
                            name = 'password' 
                            id = 'password' 
                            placeholder = 'Password' 
                            autocomplete = 'off'
                            required
                        />
                    </div>
                    <div className = 'formData'>
                        <input 
                            type = 'password' 
                            name = 'password2' 
                            id = 'password2' 
                            autocomplete = 'off'
                            placeholder = 'Repeat Password' 
                            required
                        />
                    </div>
                    <div className = 'formData'>
                        <input className = 'submit' type = 'submit' value = 'Register' name = 'register' />
                    </div>
                    <div className = 'formData2'>
                        <Link to = '/auth' className = 'alt'> Login to Existing Account </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;