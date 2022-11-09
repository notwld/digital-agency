import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader.js'
import axios from 'axios'
export default function Blogs() {
    const [loading, setloading] = useState(true)
    const [data, setdata] = useState([])
    const user = localStorage.getItem('user');
    const handleDelete = async (id, e) => {
        e.preventDefault();
        await axios.delete(`/api/v1/blog/delete/${id}`)
            .then(() => { window.location.href = '/blogs'; })
            .catch((error) => { alert(error.response.data.message); })
    }
    const getBlogs = async () => {
        if(user){
            await axios.get(`/api/v1/blogs/${user}`)
            .then((response) => { setloading(false); setdata(response.data.data) })
            .catch((error) => { alert(error) });
        }
        else{
            await axios.get("/api/v1/blogs")
            .then((response) => { setloading(false); setdata(response.data.data) })
            .catch((error) => { alert(error) });
        }
    }
    useEffect(() => {
        getBlogs()
    }, [])
    const turncate = (str, no_words) => {
        return str.split(" ").splice(0, no_words).join(" ");
    }
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="display-3 mb-5">
                    Blogs
                </h1>
                <Link to='/create-blog' state={{event:"Create",title:'',author:user,blog:''}} type="button" className="btn btn-primary">Create</Link>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Title</th>
                        <th scope="col">Slug</th>
                        <th scope="col">Author</th>
                        <th scope="col">Image</th>
                        <th scope="col">Blog</th>
                        <th scope="col">Date</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {loading ? <Loader /> :
                    <tbody>
                        {data.map((item, index) =>
                            <tr key={item._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.slug}</td>
                                <td>{item.author}</td>
                                <td><img style={{width:"50px",aspectRatio:"1/1"}} src={item.image} alt={`${item.title}'s image`}/></td>
                                <td>{turncate(item.blog, 20)}...</td>
                                <td>{`${item.date.substr(0,10)} | ${item.date.substr(11,5)}`}</td>
                                <td>
                                    <Link to='/create-blog' state={{event:"Edit",user:user,title:item.title,slug:item.slug,author:item.author,blog:item.blog,image:item.image,id:item._id}} type="button" className="btn btn-primary">Edit</Link>&nbsp;|&nbsp;
                                    <button type="button" className="btn btn-danger" onClick={(e) => handleDelete(item._id, e)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>}

            </table>
        </div>
    )
}
