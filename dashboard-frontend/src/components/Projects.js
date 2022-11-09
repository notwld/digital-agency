import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from './Loader.js'
export default function Projects() {
    const [loading, setloading] = useState(true)
    const [data, setdata] = useState([])

    const handleDelete = async (id, e) => {
        e.preventDefault();
        await axios.delete(`/api/v1/project/delete/${id}`)
            .then(() => { window.location.href = '/projects'; })
            .catch((error) => { alert(error.response.data.message); })
    }
    const getProjects = async () => {
        await axios.get("/api/v1/projects")
            .then((response) => { setloading(false); setdata(response.data.data) })
            .catch((error) => { alert(error) });
    }
    useEffect(() => {
        getProjects()
    }, [])

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="display-3 mb-5">
                    Projects
                </h1>
                <Link to='/create-project' state={{event:"Create",title:'',image:'',details:''}} type="button" className="btn btn-primary">Create</Link>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Title</th>
                        <th scope="col">Slug</th>
                        <th scope="col">Image</th>
                        <th scope="col">Description</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {loading ? <Loader /> : <tbody>
                    {data.map((item,index) =>
                        <tr key={item._id}>
                            <th scope="row">{index+1}</th>
                            <td>{item.title}</td>
                            <td>{item.slug}</td>
                            <td><img style={{width:"50px",aspectRatio:"1/1"}} src={item.image} alt={`${item.title}'s image`}/></td>
                            <td>{item.details}</td>
                            <td>
                            <Link to='/create-project' state={{event:"Edit",title:item.title,slug:item.slug,image:item.image,details:item.details,id:item._id}} type="button" className="btn btn-primary">Edit</Link>&nbsp;|&nbsp;
                                <button type="button" className="btn btn-danger" onClick={(e) => handleDelete(item._id, e)}>Delete</button>
                            </td>
                        </tr>
                    )}

                </tbody>}

            </table>
        </div>
    )
}
