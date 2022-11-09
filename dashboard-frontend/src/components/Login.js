import React from 'react'
import axios from 'axios'
export default function Login() {
    const validateEmail=()=>{
        //Complete this
        return true;
    }
    const validatePassword=()=>{
        //Complete this
        return true;
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        let email = document.getElementById('username').value;
        let password = document.getElementById('pass').value;
        let validate=true;
        validate=validateEmail(email);
        validate=validatePassword(password);
        if(validate)
        {
            await axios.post(
                "/api/v1/login",
                {
                  email,
                  password,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((response)=> { 
                if(response.data.role==="admin")
                {
                    window.location.href = '/users'
                    localStorage.setItem('admin', 'true');
                }
                else{
                    window.location.href = '/blogs';
                    localStorage.setItem('user', response.data.name);
                }
                })
              .catch((error)=>alert(error.response.data.message))
        }
        else{
            alert("Input is incorrect")
        }
    }
    return (
        <div className="container my-5">
            <h1 className="display-3">
                Login
            </h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">User Email</label>
                    <input type="email" class="form-control" id="username" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="pass" />
                </div>
                <button type="submit" class="btn btn-primary" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}
