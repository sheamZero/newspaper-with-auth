import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        // console.log(email, password);

        // login user method
        loginUser(email, password)
            .then(result => {
                console.log("successfully login");
                navigate(location.state?location.state:"/")
            })
            .catch(err => alert(err))
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="card bg-base-100 w-full max-w-xl mx-auto shrink-0 shadow">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center text-sm font-medium mb-3'>
                    Do not have an account?
                    <Link className='text-blue-500' to={"/register"}> Register</Link>
                </p>
            </div>

        </div>
    );
};

export default Login;