import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;


class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            race: ''
        }
    }


    render() {
        return (
            <div>
                
                    <h2 className='header'>Sign Up</h2>
                    <input className='input-box'
                        type = 'text'
                        name = 'username'
                        placeholder = 'Username'
                    />
                    <input className='input-box'
                        type = 'text'
                        name = 'password'
                        placeholder = 'Password'
                    />
                    <input className='input-box'
                        type = 'text'
                        name = 'race'
                        placeholder = 'Race'
                    />
                    <button className='btn'><Link to='/users'>Welcome to the Club!</Link></button> 
                
            </div>
        );
    }
}

export default SignUp;