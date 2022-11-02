import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Login = () => {
  const {login} = useContext(AuthContext)
    const handleSubmit =event =>{
        event.preventDefault()
        const form =event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email,password)
        .then(result =>{
          const user =result.user;
          console.log(user)
          form.reset()
        })
        .catch(error =>console.error(error))
    }







    return (
        <div className="w-full my-20 hero">
  <div className="grid flex-col gap-20 hero-content md:grid-cols-2 lg:flex-row">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={img} alt="" />
    </div>
    <div className="w-full max-w-sm shadow-2xl card bg-base-100 py-10">
    <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="mt-6 form-control">
          <input className='btn btn-primary' type="submit" value="Login" />
        </div>
      </form>
      <p className='text-center'>New to Genius Car <Link className='text-orange-600' to='/register'>SignUp</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;