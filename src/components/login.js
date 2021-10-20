import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import httpClient from '../api/httpclient.js'
// import {httpClient} from '../api/httpclient2.js'

async function loginUser(credentials) {
    try {
    const token = (await axios.post('http://127.0.0.1:8000/api/auth/signin/', 
          {
          email: credentials.username.trim(),
          password: credentials.password
          }
        )
    ).data;
    return token;
        // .then(res => console.log("axios res: ", res.data.access_token));
    } catch (err) {
        return null;
    }
}

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [invalid, setInvalid] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        console.log("submitting:", token);
        if (!token) {
            setInvalid(true);
            return;
        }
        setInvalid(false);
        setToken(token);
    }

  return(
    <div class="card">
    <div class="flex-col m-5 h-100">
      <div class="card-header">Please Log In</div>
        <div class="card-body" style={{minWidth: "35%", maxWidth: "50%", display:'inline-block'}}>
        <div class="p-2"/>
        <div class="form-group">
        <p class="m-0">Username</p>
        <input class={(invalid) ? "form-control is-invalid" : "form-control"} type="text" onChange={e => setUserName(e.target.value)}/>
        </div>
        <div class="form-group">
        <p class="m-0">Password</p>
        <input class={(invalid) ? "form-control is-invalid" : "form-control"} type="password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <button className="btn btn-primary btn-sm" type="submit" onClick={handleSubmit}>Log In</button>
        </div>
    </div>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
