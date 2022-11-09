import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
export default function BlogForm() {
    const location = useLocation();
    const [title, settitle] = useState(location.state.title)
    const [author, setauthor] = useState(location.state.author)
    const [slug, setSlug] = useState(location.state.slug)
    const [blog, setblog] = useState(location.state.blog)
    const [loading, setloading] = useState(false)
    const [image, setimage] = useState(location.state.image)
    const admin=localStorage.getItem('admin')
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        await axios.post(
            "/api/v1/blog/create",
            {
                title,
                author,
                slug,
                blog,
                image,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then(() => { window.location.href = '/blogs'; setloading(false) })
            .catch((error) => { alert(error.response.data.message); setloading(false) })
    }
    const handleEdit = async (e) => {
        e.preventDefault();
        setloading(true)
        await axios.patch(
            `/api/v1/blog/edit/${location.state.id}`,
            {
                title,
                author,
                slug,
                blog,
                image,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then(() => { window.location.href = '/blogs'; setloading(false) })
            .catch((error) => { alert(error.response.data.message); setloading(false) })

    }
    return (
        <div className="container my-5">
            <h1 className="display-3">
                {location.state.event} Blog
            </h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Title</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Title' onChange={(e) => settitle(e.target.value)} value={title} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Slug</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Slug' onChange={(e) => setSlug(e.target.value)} value={slug} />
                </div>
                {admin?<div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Author</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Enter Author' onChange={(e) => setauthor(e.target.value)} value={author} />
                </div>:null}
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Image</label>
                    <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={imageChangeHandler} />
                </div>
                <div class="mb-3">
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Write Blog" id="floatingTextarea" rows='10' onChange={(e) => setblog(e.target.value)} value={blog}></textarea>
                        <label for="floatingTextarea">Blog</label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" disabled={loading} onClick={location.state.event === 'Edit' ? handleEdit : handleSubmit}>{loading ? 'Loading...' : `${location.state.event}`}</button>
            </form>
        </div>
    )
}
