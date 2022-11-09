import React,{useState} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
export default function ProjectForm() {
    const location=useLocation()
    const [loading, setloading] = useState(false);
    const [title, settitle] = useState(location.state.title);
    const [slug, setSlug] = useState(location.state.slug);
    const [image, setimage] = useState(location.state.image);
    const [details, setdetails] = useState(location.state.details);
    
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
            "/api/v1/project/add",
            {
                title,
                details,
                slug,
                image,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then(() => { window.location.href = '/projects'; setloading(false) })
            .catch((error) => { alert(error.response.data.message); setloading(false) })
    }
    const handleEdit=async(e)=>{
        e.preventDefault();
        setloading(true)
        await axios.patch(
            `/api/v1/project/edit/${location.state.id}`,
            {
                title,
                details,
                slug,
                image,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then(() => { window.location.href = '/projects'; setloading(false) })
            .catch((error) => { alert(error.response.data.message); setloading(false) })

    }
    return (
        <div className="container my-5">
            <h1 className="display-3">
                {location.state.event} Project
            </h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Title</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Title' onChange={(e) => settitle(e.target.value)} value={title} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Slug</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Slug' onChange={(e) => setSlug(e.target.value)} value={slug} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Image</label>
                    <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={imageChangeHandler} />
                </div>
                <div class="mb-3">
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Write Blog" id="floatingTextarea" rows='10' onChange={(e) => setdetails(e.target.value)} value={details}></textarea>
                        <label for="floatingTextarea">Details</label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" disabled={loading} onClick={location.state.event==='Edit'?handleEdit:handleSubmit}>{loading ? 'Loading...' :  `${location.state.event}`}</button>
            </form>
        </div>
    )
}
