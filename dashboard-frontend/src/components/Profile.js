import React, { useState } from 'react'
import axios from 'axios'
const Profile = () => {
    const [loading, setloading] = useState(false)
    const [newloading, setnewloading] = useState(false)
    const [password, setpassword] = useState("");
    const [newPassword, setnewPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState(false)
    const handleCheckPassword = async (e) => {
        e.preventDefault();
        setloading(true)
        await axios.post(
            "/api/v1/checkpassword",
            {
                password
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then(() => { setloading(false); setconfirmPassword(true) })
            .catch((error) => { alert(error.response.data.message); setloading(false); setconfirmPassword(false) })
    }
    const handleChangePassword = async (e) => {
        e.preventDefault();
        setnewloading(true)
        await axios.post(
            "/api/v1/newpassword",
            {
                password,
                newPassword
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then(() => { alert("Password Changed Successfully"); setpassword(""); setnewPassword(""); setconfirmPassword(false); setnewloading(false); })
            .catch((error) => { alert(error.response.data.message); setnewloading(false); })

    }
    return (
        <div className="container my-5">
            <h1 className="display-3">Change Password</h1>
            <form>
                {!confirmPassword ?
                    <div class="mb-3">
                        <label for="passwordInputEmail1" class="form-label">Old Password</label>
                        <input type="password" class="form-control" id="passwordInputEmail1" aria-describedby="emailHelp" onChange={(e) => setpassword(e.target.value)} value={password} />
                        <button class="btn btn-primary" disabled={loading} onClick={handleCheckPassword}>{loading ? 'Loading...' : `Check`}</button>
                    </div> : null
                }
                {confirmPassword ?
                    <div class="mb-3">
                        <label for="passwordInputEmail2" class="form-label">New Password</label>
                        <input type="text" class="form-control" id="passwordInputEmail2" aria-describedby="emailHelp" onChange={(e) => setnewPassword(e.target.value)} value={newPassword} />
                        <button class="btn btn-success" disabled={newloading} onClick={handleChangePassword}>{newloading ? 'Loading...' : `Confirm`}</button>
                    </div>
                    : null}
            </form>
        </div>
    )
}

export default Profile
//checkpassword