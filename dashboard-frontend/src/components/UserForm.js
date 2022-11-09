import React, { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
export default function CreateUser() {
    const location = useLocation()
    const [loading, setloading] = useState(false);
    const [name, setname] = useState(location.state.name);
    const [email, setemail] = useState(location.state.email);
    const [image, setimage] = useState(location.state.image);
    const [password, setpassword] = useState(location.state.password);
    const [role, setrole] = useState(location.state.role)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        if (ValidateEmail(email)) {
            await axios.post(
                "/api/v1/user/create",
                {
                    name,
                    email,
                    image,
                    password,
                    role,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then(() => { window.location.href = '/users'; setloading(false) })
            .catch((error) => { alert(error.response.data.message); setloading(false) })
        }
        else{
            alert("You have entered an invalid email address!")
            setloading(false)
        }
        
    }
    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)
    }
    const handleEdit = async (e) => {
        e.preventDefault();
        if (ValidateEmail(email)) {
            if (location.state.role === "admin" && role !== "admin") {
                alert("Admin Role Cannot be edited")
            }
            else {
                setloading(true)
                await axios.patch(
                    `/api/v1/user/edit/${location.state.id}`,
                    {
                        name,
                        email,
                        image,
                        password,
                        role,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                    .then(() => { window.location.href = '/users'; setloading(false) })
                    .catch((error) => { alert(error.response.data.message); setloading(false) })
            }
        }
        else {
            alert("You have entered an invalid email address!")
            setloading(false)
        }
    }
    const imageChangeHandler = (e) => {
        const file = e.target.files[0];
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setimage(Reader.result)
            }
        };
    }
    return (
        <div className="container my-5">
            <h1 className="display-3">
                {location.state.event} User
            </h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Name'
                        onChange={(e) => setname(e.target.value)} value={name} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email'
                        onChange={(e) => setemail(e.target.value)} value={email} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Image</label>
                    <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={imageChangeHandler} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Role</label>
                    <input type="check" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Role'
                        onChange={(e) => setrole(e.target.value)} value={role} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Enter Password'
                        onChange={(e) => setpassword(e.target.value)} value={password} />
                </div>
                <button type="submit" class="btn btn-primary" disabled={loading} onClick={location.state.event === 'Edit' ? handleEdit : handleSubmit}>{loading ? 'Loading...' : `${location.state.event}`}</button>
            </form>
        </div>
    )
}
