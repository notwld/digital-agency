import React,{useState} from 'react'
import { Link, Outlet } from 'react-router-dom';
import logo from './logo.png';
import axios from 'axios'
function Nav() {
    const [user, setUser] = useState(localStorage.getItem('user'));
    const [admin, setadmin] = useState(localStorage.getItem('admin'))
    const handleLogout = async (e) => {
        e.preventDefault();
        setUser(null);
        setadmin(null);
        await axios.get("/api/v1/logout")
        .then(()=> {
            localStorage.removeItem('user');
            localStorage.removeItem('admin');
            window.location.href = '/login';
        })
        .catch((error)=>alert(error.response.data.message));
    }
    const handleChangePassword=()=>{
        console.log('it works')
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand">
                    <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                    Barlasify
                </Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {(admin || user) && <li class="nav-item">
                            <Link class="nav-link" to="/blogs">Blogs</Link>
                        </li>}
                        {admin && <li class="nav-item">
                            <Link class="nav-link" to="/projects">Projects</Link>
                        </li>}
                        {admin && <li class="nav-item">
                            <Link class="nav-link" to="/users">Users</Link>
                        </li>}
                        {admin && <li class="nav-item">
                            <Link class="nav-link" to="/mail">Admin Mail</Link>
                        </li>}
                    <Outlet />
                    </ul>
                    <div class="d-flex">
                        {admin || user ? <button class="btn btn-outline-danger" onClick={handleLogout}>Logout</button> : <Link class="btn btn-outline-success" to="/login">Login</Link>}
                        {admin  ?  <Link to="/profile" class="btn btn-outline-success" onClick={handleChangePassword}>Change Password</Link> : null}
                    </div>
                </div>  
            </div>
        </nav>
    )
}


export default Nav
