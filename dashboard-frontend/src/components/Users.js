import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
export default function Users() {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true)
    const getUser = async () => {
        await axios.get("/api/v1/users")
            .then((response) => { setloading(false); setdata(response.data.data) })
            .catch((error) => { alert(error) });
    }
    const handleDelete = async (id,role, e) => {
        e.preventDefault();
        if(role==="admin"){
            alert("Admin Cannot be deleted")
        }
        else{
            await axios.delete(`/api/v1/user/delete/${id}`)
            .then(() => { window.location.href = '/users'; })
            .catch((error) => { alert(error.response.data.message); })
        }
    }
    useEffect(() => {
        getUser()
    }, [])
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="display-3 mb-5">
                    Users
                </h1>
                <Link to='/create-user' state={{event:"Create",name:"",email:"",image:"",role:"",password:""}} type="button" className="btn btn-primary">Create</Link>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Image</th>
                        <th scope="col">Role</th>
                        <th scope="col">Password</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {loading ? <Loader /> : <tbody>
                    {data.map((item,index) =>
                    <tr key={item._id}>
                        <th scope="row">{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td><img style={{width:"50px",aspectRatio:"1/1"}} src={item.image} alt={`${item.name}'s image`}/></td>
                        <td>{item.role}</td>
                        <td>{item.password}</td>
                        <td>
                        <Link to='/create-user' state={{event:"Edit",name:item.name,email:item.email,image:item.image,role:item.role,password:item.password,id:item._id}} type="button" className="btn btn-primary">Edit</Link>&nbsp;|&nbsp;
                                <button type="button" className="btn btn-danger" onClick={(e) => handleDelete(item._id,item.role, e)}>Delete</button>
                        </td>
                    </tr>)}
                </tbody>}
            </table>
        </div>
    )
}
