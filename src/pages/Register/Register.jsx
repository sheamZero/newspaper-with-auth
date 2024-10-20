import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Register = () => {
    const { user,createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        // taking form values
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        const photo = form.get("photoUrl");
        const name = form.get("name");
        const checked = e.target.checked.checked;

        console.log(name, photo, email, password, checked);
        // create an user in firebase
        createUser(email, password)
            .then(result => console.log(result.user))
            .catch(err => alert(err))

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="card bg-base-100 w-full max-w-xl mx-auto shrink-0 shadow">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Your name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input type="text" name='photoUrl' placeholder="photoUrl" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className='flex items-center gap-3'>
                        <input type="checkbox" name="checked" id="" />
                        <span>Accept Terms & Conditions</span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Register</button>
                    </div>
                </form>
                <p className='text-center text-sm font-medium mb-3'>
                    Already have an account?
                    <Link className='text-blue-500' to={"/login"}> Login</Link>
                </p>
            </div>

        </div>
    );
};

export default Register;