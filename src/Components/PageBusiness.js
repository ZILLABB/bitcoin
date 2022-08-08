import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';


const PageBusiness = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        userName: '',
        businessName: '',
        phoneNumber: '',
        email: '',
        password: '',
        referer: '',

    })



    const handleChange = (e) => {
        return setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('email', form.email)
        localStorage.setItem('userName', form.userName)
        navigate("/confirmation")
    }



    return (
        <div>
            <Form className='form1' onSubmit={handleSubmit}>
                <h1>Welcome!</h1>
                <div className='tuy'>
                    <Link to='/sign-up'><p className='buyBus'>Individual</p></Link>
                    <Link to='/business-sign-up'><p className='buy'>Business</p></Link>
                </div>
                <Form.Group className="mb-3" >

                    <Form.Control type="text" name='userName' placeholder="UserName" value={form.userName} onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3" >

                    <Form.Control type="text" name='businessName' placeholder="Business Name" value={form.businessName} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" >

                    <Form.Control type="email" name='email' placeholder="Email" value={form.email} onChange={handleChange} required />

                </Form.Group>

                <Form.Group className="mb-3" >

                    <Form.Control type='number' name='phoneNumber' value={form.phoneNumber} placeholder="Phone Number" onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" >

                    <Form.Control type='password' name='password' value={form.password} placeholder="password" onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" >

                    <Form.Control type="text" name='referer' value={form.referer} placeholder="Referer code(Optional)" onChange={handleChange} />

                </Form.Group>

                <p className='click'>By clicking the Sign Up button below, you agree to TradExpress <span> terms and service</span></p>
                <div>
                    <button className='clicking'>Sign Up</button>
                </div>
                <div>
                    <p>Already have an account ? <span> Click here</span></p>
                </div>


            </Form >
        </div >
    )
}

export default PageBusiness;