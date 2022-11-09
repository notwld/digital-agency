import React,{useState,useEffect} from 'react'
import Loader from './Loader.js'
import axios from 'axios'
const AdminMail = () => {
    const [loading, setloading] = useState(true)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const getMail = async () => {
        await axios.get("/api/v1/mail")
            .then((response) => { setloading(false); setemail(response.data.data[0].email) ; setpassword(response.data.data[0].password) })
            .catch((error) => { alert(error) });
    }
    const handleEdit = async (e) => {
        e.preventDefault();
        setloading(true)
        await axios.patch(
            `/api/v1/mail/update`,
            {
                email,
                password
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then(() => { window.location.href = '/mail'; setloading(false) })
            .catch((error) => { alert(error.response.data.message); setloading(false) })

    }
    useEffect(() => {
        getMail()
    }, [])
    return (
        <div className="container my-5">
            <h1 className="display-3">
                Set Admin Mail
            </h1>
            {loading ? <Loader /> :
            <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Gmail</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setemail(e.target.value)} value={email}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">SMPT Password</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setpassword(e.target.value)} value={password} />
            </div>
            <button type="submit" class="btn btn-primary" onClick={handleEdit}>Edit </button>
            </form>
            }
            
        </div>
    )
}

export default AdminMail