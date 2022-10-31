import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image,id,next,prev} = slide;
    return (
        <div id={`slide${id}`} className="relative w-full carousel-item">
    <div className='carousal-img'>
    <img src={image} className="w-full rounded-xl" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
      <h1 className='text-6xl font-bold text-white'>
        Affordable <br />
        Price For Car <br />
        Servicing
      </h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
      <p className='text-xl text-white'>There are many Variations of Passages of Available, <br /> the majority have suffered alteration in some from</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
    <button className="mr-5 btn btn-success">Success</button>
    <button className="btn btn-outline btn-success">Button</button>
    </div>
    <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
      <a href={`#slide${prev}`} className="mr-5 btn btn-circle">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
  </div> 
    );
};

export default BannerItem;