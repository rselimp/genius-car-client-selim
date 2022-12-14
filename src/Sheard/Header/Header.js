import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
  const{user,logOut} =useContext(AuthContext)

  const handleLogOut =() =>{
    logOut()
    .then()
    .catch();
  }


    const menuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>About</Link></li>
    <li><Link to='/'>Services</Link></li>
    <li><Link to='/'>Blog</Link></li>
    <li><Link to='/'>Contact</Link></li>

    </>
    return (
        <div className="navbar h-20 mb-10 pt-12 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
        {menuItems}
      </ul>
    </div>
    <Link to='/'className="btn btn-ghost normal-case text-xl">
    <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 font-semibold">
     {menuItems}
    </ul>
  </div>
  <div className="navbar-end">

  {
    user?.email ?
    <>
      <Link to='/orders'>Orders</Link>
      
        <button onClick={handleLogOut} className='btn btn-ghost'>Sign Out</button>
        
    </>
    :
    <Link className='mr-5' to='/login'>Login</Link>
  }

  <button className="btn btn-outline btn-success">Appointment</button>
  </div>
</div>
    );
};

export default Header;