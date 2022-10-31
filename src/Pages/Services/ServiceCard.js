import React from 'react';
import {FaArrowRight} from "react-icons/fa"

const ServiceCard = ({service}) => {
    const{img, title,price} = service
    return (
<div className="shadow-xl card w-96 bg-base-100">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-2xl font-semibold text-orange-400'>Price: $ {price}</p>
    <div className="justify-end card-actions">
      <button className="text-orange-500 btn btn-ghost"><FaArrowRight></FaArrowRight></button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;