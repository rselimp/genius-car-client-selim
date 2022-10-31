import React from 'react';
import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="my-20 hero">
        <div className="flex-col hero-content lg:flex-row">
         <div className='relative w-1/2'>
         <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl " />
         <img src={parts} className="absolute w-3/5 rounded-lg shadow-2xl border-7 top-1/2 right-5" />
         </div>
          <div className='w-1/2'>
            <p className='text-2xl text-orange-500 text-bold'>About us</p>
            <h1 className="my-5 text-5xl font-bold ">We are qualified <br />and of experience <br /> in this field</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;