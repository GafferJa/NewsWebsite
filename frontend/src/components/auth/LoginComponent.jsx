import React from 'react'
import HeaderComponent from '../../layouts/HeaderComponent'
import FooterComponent from '../../layouts/FooterComponent'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export default function LoginComponent() {
    const { register, setError, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    return (
        <div>
            <HeaderComponent />
            <div className='container mt-3'>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Login Page</h1>
                    </div>
                    <div className='col-md-12'>
                        <form>
                            <div className="form-group mb-2">
                                <label htmlFor="">Email</label>
                                <input type="email" className='form-control' name='email' />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="">Password</label>
                                <input type="password" className='form-control' name='password' />
                            </div>
                            <div className="form-group">
                                <button className='btn btn-success'>Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-12 text-center mt-4">
                        <FooterComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}