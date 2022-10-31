import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';

const Register = () => {
    const handleSignUp =event =>{
        event.preventDefault();
    }
    return (
        <div className="w-full my-20 hero">
  <div className="grid flex-col gap-20 hero-content md:grid-cols-2 lg:flex-row">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={img} alt="" />
    </div>
    <div className="w-full max-w-sm shadow-2xl card bg-base-100 py-10">
    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="mt-6 form-control">
          <input className='btn btn-primary' type="submit" value="Sign Up" />
        </div>
      </form>
      <p className='text-center'>Already have an account ? Please<Link className='text-orange-600' to='/login'> Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default Register;